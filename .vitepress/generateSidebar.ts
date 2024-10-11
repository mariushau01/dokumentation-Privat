import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';  // Zum Auslesen des Frontmatter
import yaml from 'js-yaml'; // Zum Einlesen der YAML-Dateien

// Funktion zum Generieren der Sidebar
// Bug mit order und folders

function generateSidebar(dir: string, basePath = '') {
    const files = fs.readdirSync(dir);
    let sidebar = [];

    files.forEach((file) => {
        const fullPath = path.join(dir, file);  // Verwende path.join
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            const indexFilePath = path.join(fullPath, 'index.yml');
            let folderLabel = file; // Standard ist der Ordnername
            let folderOrder = 0; // Standard ist 0 für die Reihenfolge



            // Überprüfen, ob die index.yml existiert und laden
            if (fs.existsSync(indexFilePath)) {
                const indexContent = fs.readFileSync(indexFilePath, 'utf-8');
                const indexData = yaml.load(indexContent); // YAML-Inhalt laden

                let capitalizedFolderLabel = folderLabel
                if (folderLabel.length > 0) {
                    capitalizedFolderLabel = folderLabel.charAt(0).toUpperCase();

                    if (folderLabel.length > 1) {
                        capitalizedFolderLabel += folderLabel.slice(1)
                    }
                }

                // label ist optional, kein Fehler bei Fehlen
                folderLabel = indexData.label || capitalizedFolderLabel; // label aus der YAML oder Ordnername
                folderOrder = indexData.order || 0; // order aus der YAML oder Standardwert 0

                // Sidebar-Eintrag für den Ordner erstellen
                sidebar.push({
                    text: folderLabel,
                    items: generateSidebar(fullPath, path.join(basePath, file)),  // Rekursion für Unterordner
                    order: folderOrder // Order des Ordners
                });
            }
            else {
                let capitalizedFolderLabel = folderLabel
                if (folderLabel.length > 0) {
                    capitalizedFolderLabel = folderLabel.charAt(0).toUpperCase();

                    if (folderLabel.length > 1) {
                        capitalizedFolderLabel += folderLabel.slice(1)
                    }
                }

                // Sidebar-Eintrag für den Ordner erstellen
                sidebar.push({
                    text: capitalizedFolderLabel,
                    items: generateSidebar(fullPath, path.join(basePath, file)),  // Rekursion für Unterordner
                    order: folderOrder // Order des Ordners
                });
            }


        } else if (stat.isFile() && file.endsWith('.md')) {
            // Wenn es eine Markdown-Datei ist
            const fileContent = fs.readFileSync(fullPath, 'utf-8');
            const { data } = matter(fileContent); // Frontmatter auslesen
            const order = data.order || 0; // `order` aus dem Frontmatter auslesen, Standardwert 0

            let filename = file.replace('.md', '')
            if (filename == 'index') {
                filename = ''
            }

            let filenameWithoutExtension = file.replace('.md', '')
            let capitalizedFileLabel = filenameWithoutExtension
            if (filenameWithoutExtension.length > 0) {
                capitalizedFileLabel = filenameWithoutExtension.charAt(0).toUpperCase();

                if (filenameWithoutExtension.length > 1) {
                    capitalizedFileLabel += filenameWithoutExtension.slice(1)
                }

            }

            sidebar.push({
                text: data.title || capitalizedFileLabel, // Titel aus dem Frontmatter oder Dateiname
                link: `/notes/${basePath}/${filename}`, // Hier sicherstellen, dass der Pfad korrekt ist
                order: order
            });

        }
    });

    // Sortiere die Sidebar basierend auf dem `order`-Wert (absteigend)
    sidebar = sidebar.sort((a, b) => (b.order || 0) - (a.order || 0));



    return sidebar;
}

export default generateSidebar;