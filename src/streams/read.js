import { createReadStream } from "fs";
import { join } from "path";
import { stdout } from "process";

export const read = async () => {
  const targetFileName = "fileToRead.txt";
  const targetFolder = "src/streams/files/";
  const targetFile = join(targetFolder, targetFileName);

  const rs = createReadStream(targetFile);
  rs.on("data", (data) => stdout.write(data));
};
// read();
