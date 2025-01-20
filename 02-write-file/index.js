const fs = require("fs");
const path = require("path");
const { stdin, stdout } = process;

const filePath = path.join(__dirname, "text.txt");

fs.writeFile(filePath, "", (err) => {
  if (err) throw err;
});

stdout.write("Please type any text (type 'exit' or press Ctrl+C to quit):\n");

stdin.on("data", (data) => {
  const input = data.toString().trim();

  if (input.toLowerCase() === "exit") {
    stdout.write("Goodbye!\n");
    process.exit();
  }

  fs.appendFile(filePath, input + "\n", (err) => {
    if (err) throw err;
    stdout.write("Text saved! Type more or 'exit' to quit:\n");
  });
});

process.on("SIGINT", () => {
  stdout.write("\nGoodbye!\n");
  process.exit();
});

