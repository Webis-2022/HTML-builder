// const fs = require("fs/promises");
// const path = require("path");

// async function copyDirectory() {
//   try {
//     const sourceDir = path.join(__dirname, "files");
//     const destinationDir = path.join(__dirname, "files-copy");

//     await fs.mkdir(destinationDir, { recursive: true });
//     console.log("Folder is created");

//     const existingFiles = await fs.readdir(destinationDir);
//     for (const file of existingFiles) {
//       await fs.unlink(path.join(destinationDir, file));
//     }

//     const files = await fs.readdir(sourceDir, { withFileTypes: true });
//     for (const file of files) {
//       if (file.isFile()) {
//         const sourcePath = path.join(sourceDir, file.name);
//         const destinationPath = path.join(destinationDir, file.name);
//         await fs.copyFile(sourcePath, destinationPath);
//       }
//     }

//     console.log("Success!");
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

// copyDirectory();





