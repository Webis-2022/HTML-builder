const fs = require("fs/promises");
const path = require("path");

async function copyStyles(sourceDir, outputFile) {
  try {

    const files = await fs.readdir("styles", { withFileTypes: true });
    const styles = [];
    for(let file of files) {
      const sourcePath = path.join(sourceDir, file.name);
      const extension = path.extname(file.name);
      if(file.isFile() && extension === ".css") {
        const data =  await fs.readFile(sourcePath, "utf-8", { withFileTypes: true });
        styles.push(data);
      }
    }
    await fs.writeFile(outputFile, styles.join("\n")), "utf-8"
    console.log("Success!");
  } catch (err) {
    console.log(err.message);
  }
}

const source = "./styles";
const output = "./project-dist/bundle.css"
copyStyles(source, output);