import { createReadStream } from "node:fs";
import { join } from "node:path";

export const read = () => {
  const targetFileName = "fileToRead.txt";
  const targetFolder = "src/streams/files/";
  const targetFile = join(targetFolder, targetFileName);

  const rs = createReadStream(targetFile);
  rs.on("data", (data) => process.stdout.write(data));
};
read();
