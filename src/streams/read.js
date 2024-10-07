import { createReadStream } from "fs";

const read = async () => {
  const stream = createReadStream("src/streams/files/fileToRead.txt", {
    encoding: "utf-8"
  });

  stream.pipe(process.stdout);

  stream.on("end", () => {
    console.log("\nPress Ctrl+C to exit...");
    process.stdin.resume();
  });
};

await read();
