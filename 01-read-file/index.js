// const fs = require('fs');
// const path = require('path');

// async function readFile() {
//   try {
//     const filePath = path.join(__dirname, "text.txt");
//     const readStream = fs.createReadStream(filePath, { encoding: "utf-8" });

//     readStream.on("data", (chunk) => {
//       console.log("File content:", chunk);
//     });

//     readStream.on("error", (err) => {
//       console.error("Error reading file:", err);
//     });

//     readStream.on("end", () => {
//       console.log("File reading completed.");
//     });
//   } catch (err) {
//     console.error("Unexpected error:", err);
//   }
// }

// readFile();

