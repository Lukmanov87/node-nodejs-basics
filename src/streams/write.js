import { createWriteStream } from "fs";
import { join } from "path";
import { stdin } from "process";

export const write = async () => {
  const targetFileName = "fileToWrite.txt";
  const targetFolder = "src/streams/files/";
  const output = createWriteStream(join(targetFolder, targetFileName));

  stdin.on("data", (data) => {
    //  Принудительное завершение при вводе ключевого слова **exit**
    if (data.toString().trim() === "exit") {
      process.exit();
    }

    output.write(data);
  });

  //  Принудительное завершение при нажатии `ctrl + c`
  process.on("SIGINT", () => {
    process.exit();
  });
};
write();
