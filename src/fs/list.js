import { readdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

export const list = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const targetFolder = join(__dirname, "files");
    const files = await readdir(targetFolder);
    for (const file of files) console.log(file);
  } catch (err) {
    console.log("FS operation failed");
  }
};
list();
