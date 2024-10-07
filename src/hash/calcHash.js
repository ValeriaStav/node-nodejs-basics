import { createHash } from "crypto";
import { createReadStream } from "fs";

const calculateHash = async () => {
  const hash = createHash("sha256");
  const stream = createReadStream("src/hash/files/fileToCalculateHashFor.txt");

  stream.on("data", (chunk) => {
    hash.update(chunk);
  });

  stream.on("end", () => {
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
