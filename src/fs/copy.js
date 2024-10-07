import { join } from "node:path";
import { readdir, mkdir, copyFile, access } from "node:fs/promises";

const copy = async () => {
  const sourceDir = join("src", "fs", "files");
  const destinationDir = join("src", "fs", "files_copy");

  try {
    await access(sourceDir);
  } catch {
    console.error("FS operation failed");
    return;
  }

  try {
    await access(destinationDir);
    console.error("FS operation failed");
    return;
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error("FS operation failed");
      return;
    }
  }

  await mkdir(destinationDir);

  const files = await readdir(sourceDir);
  for (const file of files) {
    await copyFile(join(sourceDir, file), join(destinationDir, file));
  }
};

await copy();
