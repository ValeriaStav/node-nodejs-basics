import { join } from "node:path";
import { readdir, access } from "node:fs/promises";

const list = async () => {
  const dirPath = join("src", "fs", "files");

  try {
    await access(dirPath);
  } catch {
    console.error("FS operation failed");
    return;
  }

  try {
    const files = await readdir(dirPath);
    console.log(files);
  } catch {
    console.error("FS operation failed");
  }
};

await list();
