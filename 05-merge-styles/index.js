const fs = require("fs/promises");
const path = require("path");

async function copyStyles(sourceDir, outputFile) {
  try {
    const files = await fs.readdir(sourceDir, { withFileTypes: true });
    const styles = [];

    for (const file of files) {
      const sourcePath = path.join(sourceDir, file.name);
      const extension = path.extname(file.name);

      if (file.isFile() && extension === ".css") {
        const data = await fs.readFile(sourcePath, "utf-8");
        styles.push(data);
      }
    }

    await fs.writeFile(outputFile, styles.join("\n"), "utf-8");
    console.log("Success!");
  } catch (err) {
    console.error("Error:", err.message);
  }
}

const source = path.join(__dirname, "styles");
const output = path.join(__dirname, "project-dist", "bundle.css");

copyStyles(source, output);



