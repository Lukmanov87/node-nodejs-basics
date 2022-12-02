import fs from "node:fs";

export const rename = async () => {
  const targetFolder = "src/fs/files/";
  const targetFile = "wrongFilename.txt";
  const renamedFile = "properFilename.md";

  fs.rename(targetFolder + targetFile, targetFolder + renamedFile, (err) => {
    if (err) throw new Error("FS operation failed");
    console.log("Rename complete!");
  });
};
rename();
