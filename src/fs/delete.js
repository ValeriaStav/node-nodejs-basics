import { join } from "node:path";
import { unlink, access } from "node:fs/promises";

const remove = async () => {
  const filePath = join("src", "fs", "files", "fileToRemove.txt");

  try {
    await access(filePath);
  } catch {
    console.error("FS operation failed");
    return;
  }

  await unlink(filePath);
};

await remove();
