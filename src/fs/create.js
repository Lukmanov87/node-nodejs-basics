import { writeFile, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  console.log(__dirname);
  const pathToFolder = join(__dirname, "files");
  console.log(pathToFolder);
  const files = await readdir(pathToFolder);


  const fileName = "fresh.txt";
  const fileContent = "I am fresh and young";

  if (files.includes("fresh.txt")) {
    throw new Error("FS operation failed");
  } else {
    await writeFile(join(pathToFolder, fileName), fileContent);
  }
};
create();
