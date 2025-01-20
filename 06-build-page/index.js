const fs = require("fs/promises");
const path = require("path");

async function buildPage() {
  const projectDistPath = path.join(__dirname, "project-dist");
  const templatePath = path.join(__dirname, "template.html");
  const componentsPath = path.join(__dirname, "components");
  const stylesPath = path.join(__dirname, "styles");
  const assetsPath = path.join(__dirname, "assets");
  const outputHtml = path.join(projectDistPath, "index.html");
  const outputStyles = path.join(projectDistPath, "style.css");
  const outputAssets = path.join(projectDistPath, "assets");

  try {

    // 1.
    await fs.mkdir(projectDistPath, { recursive: true });
    console.log("Folder is created!")

    // 2.
    let template = await fs.readFile(templatePath, "utf-8");
    const componentFiles = await fs.readdir(componentsPath);

    for(let file of componentFiles) {
      const filePath = path.join(componentsPath, file);
      const extension = path.extname(file);
      const componentName = path.basename(filePath, extension);

      if(extension === ".html") {
        const componentContent = await fs.readFile(filePath, "utf-8");
        template = template.replace(new RegExp(`{{${componentName}}}`, "g"), componentContent)
      }
    }

    await fs.writeFile(outputHtml, template, "utf-8")
    console.log("File index.html created!");

    // 3.

    const files = await fs.readdir("styles", { withFileTypes: true });
    let styles = [];


    for(let file of files) {
      const filePath = path.join(stylesPath, file.name);
      if(file.isFile()) {
        const data = await fs.readFile(filePath, "utf-8");
        styles.push(data);
      }
    }
    await fs.writeFile(outputStyles, styles);
    console.log("Styles are compiled!")

  // 4.

  async function copyAssets(source, destination) {
    await fs.mkdir(destination, { recursive: true });
    const assetFolderFiles = await fs.readdir(source, { withFileTypes: true });

    for(let file of assetFolderFiles) {
      const sourcePath = path.join(source, file.name);
      const destinationPath = path.join(destination, file.name);

      if (file.isDirectory()) {
        await copyAssets(sourcePath, destinationPath);
      } else if (file.isFile()) {
        await fs.copyFile(sourcePath, destinationPath);
      }
    }
  }
    await copyAssets(assetsPath, outputAssets);
    console.log("Assets folder is copied!");
  } catch (err) {
    console.log(err.message);
  }
}

buildPage();