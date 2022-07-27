import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createReadStream, createWriteStream, unlink } from "node:fs";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";

export const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const targetReadFile = join(__dirname, "files", "fileToCompress.txt");
  const targetWriteFile = join(__dirname, "files", "compressedFile.txt.gz");

  const readableStream = createReadStream(targetReadFile);
  const writableStream = createWriteStream(targetWriteFile);

  await pipeline(readableStream, createGzip(), writableStream);

  unlink(targetReadFile, (err) => {
    if (err) {
      throw err;
    }
  });
};

await compress();
