import { createWriteStream } from "node:fs";
import { join } from "node:path";

export const write = () => {
  const targetFileName = "fileToWrite.txt";
  const targetFolder = "src/streams/files/";
  const output = createWriteStream(join(targetFolder, targetFileName));

  process.stdin.on("data", (data) => {
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
