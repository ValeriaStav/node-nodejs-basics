import { spawn } from "child_process";

const scriptPath = "./src/cp/files/script.js";

const spawnChildProcess = async (args) => {
  const child = spawn("node", [scriptPath, ...args]);
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
