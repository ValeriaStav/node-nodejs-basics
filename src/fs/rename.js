import { join } from "node:path";
import { access, rename as renameFile } from "node:fs/promises";

const rename = async () => {
  const oldFile = join("src", "fs", "files", "wrongFilename.txt");
  const newFile = join("src", "fs", "files", "properFilename.md");

  try {
    await access(oldFile);
  } catch {
    console.error("FS operation failed");
    return;
  }

  try {
    await access(newFile);
    console.error("FS operation failed");
    return;
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error("FS operation failed");
      return;
    }
  }

  await renameFile(oldFile, newFile);
};

await rename();
