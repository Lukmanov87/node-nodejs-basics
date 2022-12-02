import { unlink, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const pathToFolder = join(__dirname, "files");
    const files = await readdir(pathToFolder);

    const fileName = "fileToRemove.txt";

    if (!files.includes("fileToRemove.txt")) {
        throw new Error("FS operation failed");
      }
      else {
        await unlink(join(pathToFolder, fileName));
      }
};
remove();