const fs = require("fs/promises");
const path = require("path");

async function listFilesInfo(folderPath) {
  try {
    const files = await fs.readdir(folderPath, { withFileTypes: true});
    for (const file of files) {
      if (file.isFile()) {
        const filePath = path.join(folderPath, file.name);
        const stats = await fs.stat(filePath);
        const extension = path.extname(file.name);
        const indexOfName = file.name.indexOf('.');
        const cleanedName = file.name.substring(file.name[file.name.length -1], indexOfName);
        const cleanedExtension = extension.replace('.', "")

        console.log(`${cleanedName} - ${cleanedExtension} - ${stats.size / 1000} Kb`)
      }
    }
  } catch (err) {
    console.log ("Err", err)
  }
}

listFilesInfo("secret-folder");