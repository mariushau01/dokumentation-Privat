const fs = require('fs-extra');
const path = require('path');
const readlineSync = require('readline-sync');
const { glob } = require('glob');

// Funktion, um alle Markdown-Dateien in den Verzeichnissen docs und blog zu finden
const getMarkdownFiles = async () => {
  try {
    // Verwende glob mit einer Promise (ohne callback)
    const files = await glob('+(docs|blog)/**/*.md');
    return files;
  } catch (err) {
    throw new Error('Error finding files:', err);
  }
};


// Funktion, um Links mit spitzen Klammern zu ersetzen
const replaceLinksInFile = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const updatedContent = content.replace(/<https?:\/\/[^>]+>/g, (match) => {
      // Entferne die spitzen Klammern
      return match.slice(1, -1);
    });

    // Schreibe nur, wenn es Änderungen gibt
    if (content !== updatedContent) {
      await fs.writeFile(filePath, updatedContent, 'utf8');
      console.log(`Updated links in file: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing file: ${filePath}`, error);
  }
};

// Hauptfunktion
const runMigration = async () => {
  try {
    // 1) Lösche den Ordner .vitepress
    const vitepressPath = path.join(__dirname, '.vitepress');
    if (await fs.pathExists(vitepressPath)) {
      await fs.remove(vitepressPath);
      console.log('Ordner .vitepress wurde gelöscht.');
    }

    // 2) Verschiebe Markdown-Dateien aus docs/blog eine Ebene raus nach /blog
    const blogDir = path.join(__dirname, 'docs', 'blog');
    const targetBlogDir = path.join(__dirname, 'blog');
    await fs.ensureDir(targetBlogDir);
    const markdownFiles = await fs.readdir(blogDir);

    for (const file of markdownFiles) {
      if (file.endsWith('.md')) {
        await fs.move(path.join(blogDir, file), path.join(targetBlogDir, file), { overwrite: true });
      }
    }
    console.log('Markdown-Dateien aus docs/blog verschoben.');

    // 3) Verschiebe alle Ordner in docs/notes eine Ebene raus
    const notesDir = path.join(__dirname, 'docs', 'notes');
    const notesFolders = await fs.readdir(notesDir);

    for (const folder of notesFolders) {
      const folderPath = path.join(notesDir, folder);
      if (await fs.lstat(folderPath).then(stats => stats.isDirectory())) {
        await fs.move(folderPath, path.join(__dirname, 'docs', folder), { overwrite: true });
      }
    }
    console.log('Ordner aus docs/notes verschoben.');

    // 4) Lösche den Ordner notes und blog
    await fs.remove(notesDir);
    console.log('Ordner notes wurde gelöscht.');
    await fs.remove(blogDir)
    console.log('Ordner blog wurde gelöscht.')

    // 5) Lösche die Datei package-lock.json
    const packageLockFile = path.join(__dirname, 'package-lock.json');
    if (await fs.pathExists(packageLockFile)) {
      await fs.remove(packageLockFile);
      console.log('package-lock.json wurde gelöscht.');
    }

    // 6) Schreibe „# Mitschrift“ in die Datei docs/index.md
    const indexFilePath = path.join(__dirname, 'docs', 'index.md');
    await fs.outputFile(indexFilePath, '# Mitschrift');
    console.log('Inhalt in docs/index.md wurde geschrieben.');

    // 7) Frage nach dem Namen, einer Beschreibung, GitHub-Username und GitHub-Profil-Link
    const name = readlineSync.question('Name: ');
    const description = readlineSync.question('Beschreibung: ');
    const githubUsername = readlineSync.question('GitHub-Username: ');
    const githubProfileLink = readlineSync.question('GitHub-Profil-Link: ');

    // 8) Setze diese Werte in blog/authors.yml (komplette Datei wird überschrieben)
    const authorsFilePath = path.join(__dirname, 'blog', 'authors.yml');
    const authorData = `
${githubUsername}:
  name: ${name}
  title: ${description}
  url: ${githubProfileLink}
  image_url: ${githubProfileLink}.png
  page: true
  socials:
    github: ${githubUsername}
    `;
    await fs.writeFile(authorsFilePath, authorData);
    console.log('Daten in blog/authors.yml wurden geschrieben.');

    // 9) Lösche die Datei blog/welcome.md
    const welcomeFile = path.join(__dirname, 'blog', 'welcome.md');
    if (await fs.pathExists(welcomeFile)) {
      await fs.remove(welcomeFile);
      console.log('blog/welcome.md wurde gelöscht.');
    }

    // 10) Verschiebe alle Inhalte von docs/public/images nach /public/images
    const imagesSrcDir = path.join(__dirname, 'docs', 'public', 'images');
    const imagesDestDir = path.join(__dirname, 'public', 'images');
    await fs.ensureDir(imagesDestDir);
    await fs.copy(imagesSrcDir, imagesDestDir);
    console.log('Bilder von docs/public/images nach public/images verschoben.');

    // 11) Verschiebe alle anderen Inhalte von docs/public nach public
    const publicSrcDir = path.join(__dirname, 'docs', 'public');
    const publicDestDir = path.join(__dirname, 'public');
    await fs.copy(publicSrcDir, publicDestDir, { overwrite: true });
    console.log('Andere Inhalte von docs/public nach public verschoben.');

    // 12) Lösche den Ordner docs/public
    await fs.remove(publicSrcDir);
    console.log('Ordner docs/public wurde gelöscht.');

    // 13) Lösche die Datei docs/allgemeines/github.md
    const githubMdFile = path.join(__dirname, 'docs', 'allgemeines', 'github.md');
    if (await fs.pathExists(githubMdFile)) {
      await fs.remove(githubMdFile);
      console.log('docs/allgemeines/github.md wurde gelöscht.');
    }

    // 14) Führe die Link-Migration und Admonitions-Migration durch
    const filesToMigrate = await getMarkdownFiles();
    await Promise.all(filesToMigrate.map((file) => replaceLinksInFile(file)));
    console.log('Links wurden verändert.');


    // 15) Starte die Dokumentation mit npm run start
    const { exec } = require('child_process');
    exec('npm run start', (error, stdout, stderr) => {
      if (error) {
        console.error(`Fehler beim Starten der Dokumentation: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Fehler: ${stderr}`);
        return;
      }
      console.log(`Dokumentation gestartet:\n${stdout}`);
    });

  } catch (error) {
    console.error('Migration fehlgeschlagen:', error);
  }
};

runMigration();