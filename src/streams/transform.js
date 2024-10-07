import { Transform } from "stream";

const transform = async () => {
  const reverseStream = new Transform({
    transform(text, _, callback) {
      callback(null, text.toString().split("").reverse().join(""));
    }
  });

  console.log("Enter text to reverse:");

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
