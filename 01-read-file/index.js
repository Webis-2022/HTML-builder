const fs = require('fs/promises');
const path = require('path');


async function readFile() {
  let result;
  try {
    const filePath = path.join(__dirname, "text.txt");
    result =  await fs.readFile(filePath, "utf-8");
    return result;
  } catch(err) {
    console.log("Err", err);
  }

}

(async () => {
  const data = await readFile();
  console.log("File content:", data);
})();


