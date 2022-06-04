import { readdir, readFile } from "fs";

export const read = async () => {
  const targetFolder = "src/fs/files/";
  const targetFile = "fileToRead.txt";
  readdir(targetFolder, { withFileTypes: true }, (err) => {
    if (err) throw err;
    readFile(targetFolder + targetFile, "utf8", (err, data) => {
      if (err) console.log("FS operation failed");
      else {
        console.log(data);
      }
    });
  });
};

read();
