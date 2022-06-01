import { writeFile, readdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathToFolder = join(__dirname, "files");
  const files = await readdir(pathToFolder);

  const fileName = "fresh.txt";
  const fileContent = "I am fresh and young";

  if (files.includes("fresh.txt")) {
    console.log("FS operation failed");
  } else {
    await writeFile(join(pathToFolder, fileName), fileContent);
  }
};
create();
