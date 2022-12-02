import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";

export const calculateHash = async () => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const pathToFile = join(__dirname, "files/fileToCalculateHashFor.txt");
    const fileContent = await readFile(pathToFile);
    const hash = createHash("sha256").update(fileContent).digest("hex");
    console.log("hash: " + hash);
  } catch (error) {
    throw error
  }
};
calculateHash();
