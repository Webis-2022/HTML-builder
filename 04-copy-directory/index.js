const fs = require("fs/promises");
const path = require("path");


async function copyDirectory() {
  try {
    await fs.mkdir(path.join(__dirname, "files-copy"));
    console.log("Folder is created");

    const sourceDir = "./files";
    const destinationDir = "./files-copy";
    const files = await fs.readdir(sourceDir, { withFileTypes: true });

    for (const file of files) {
      const sourcePath = path.join(sourceDir, file.name);
      const destinationPath = path.join(destinationDir, file.name);
      await fs.copyFile(sourcePath, destinationPath);
    }
    console.log('Success!');
  } catch(err) {
    console.log("Err", err);
  }

}

copyDirectory();