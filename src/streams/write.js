import { createWriteStream } from "fs";

const write = async () => {
  const stream = createWriteStream("src/streams/files/fileToWrite.txt");

  console.log("Enter data (press Enter Ctrl+C to finish input):");

  process.stdin.pipe(stream);
};

await write();
