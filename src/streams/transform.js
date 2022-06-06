import { Transform } from "stream";
import { pipeline } from "stream/promises";

class TranformStream extends Transform {
  constructor(props = {}) {
    super(props);
  }

  _transform(chunk, enc, cb) {
    const chunkStringField = chunk.toString();
    const reverseChunk = chunkStringField.split("").reverse().join("");    
    cb(null, reverseChunk + "\n");
  }
}

export const transform = async () => {
  await pipeline(process.stdin, new TranformStream(), process.stdout);
};

await transform();
