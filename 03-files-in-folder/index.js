
const fs = require("fs/promises");
const path = require("path");

async function listFilesInfo(folderPath) {
  try {
    const files = await fs.readdir(folderPath, { withFileTypes: true });
    for (const file of files) {
      if (file.isFile()) {
        const filePath = path.join(folderPath, file.name);
        const stats = await fs.stat(filePath);
        const extension = path.extname(file.name);
        const indexOfName = file.name.lastIndexOf(".");
        const cleanedName = file.name.substring(0, indexOfName);
        const cleanedExtension = extension.replace(".", "");
        const fileSizeInKB = (stats.size / 1024).toFixed(2);

        console.log(`${cleanedName} - ${cleanedExtension} - ${fileSizeInKB} KB`);
      }
    }
  } catch (err) {
    console.log("Error:", err);
  }
}

const folderPath = path.join(__dirname, "secret-folder");

listFilesInfo(folderPath);



