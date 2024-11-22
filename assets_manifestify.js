import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import clipboardy from "clipboardy";

const currentDir = path.dirname(fileURLToPath(import.meta.url));

const inputFolder = process.argv[2];

if (!inputFolder) {
  console.error(
    'Please provide a folder name as an argument (e.g., "destinations" or "gallery").'
  );
  process.exit(1);
}

const basePath = path.resolve(currentDir, "./src/assets");
const folderPath = path.join(basePath, inputFolder);

if (!fs.existsSync(folderPath)) {
  console.error(`The folder "${folderPath}" does not exist.`);
  process.exit(1);
}

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err.message}`);
    process.exit(1);
  }

  const jsonArray = files
    .filter((file) => fs.lstatSync(path.join(folderPath, file)).isFile())
    .map((file) => ({
      name: file,
      alt: `charlane_yu_makeup_result_${file.toString()}`,
    }));

  const output = JSON.stringify(jsonArray, null, 4);
  console.log(output);

  try {
    clipboardy.writeSync(output);
    console.log("JSON output copied to clipboard!");
  } catch (clipboardErr) {
    console.error("Failed to copy to clipboard:", clipboardErr.message);
  }
});
