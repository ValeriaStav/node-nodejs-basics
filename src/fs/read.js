import { join } from "node:path";
import { readFile, access } from "node:fs/promises";

const read = async () => {
  const filePath = join("src", "fs", "files", "fileToRead.txt");

  try {
    await access(filePath);
  } catch {
    console.error("FS operation failed");
  }

  try {
    const content = await readFile(filePath, "utf-8");
    console.log(content);
  } catch {
    console.error("FS operation failed");
  }
};

await read();
