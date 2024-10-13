const { glob } = require('glob');  // Glob wird korrekt importiert
const fs = require('fs-extra');

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
const migrateLinks = async () => {
  try {
    const files = await getMarkdownFiles();
    await Promise.all(files.map((file) => replaceLinksInFile(file)));
    console.log('Migration completed.');
  } catch (error) {
    console.error('Migration failed:', error);
  }
};

migrateLinks();