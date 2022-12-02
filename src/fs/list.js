import { readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

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
