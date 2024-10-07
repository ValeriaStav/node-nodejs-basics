import { Worker, isMainThread } from "worker_threads";
import { cpus } from "node:os";

const performCalculations = async () => {
  if (!isMainThread) return;

  const numCPUs = cpus().length;
  const results = [];

  const promises = Array.from({ length: numCPUs }, (_, i) => {
    return new Promise((resolve) => {
      const worker = new Worker(new URL("./worker.js", import.meta.url), {
        workerData: 10 + i
      });

      worker.on("message", (result) => {
        results.push({ status: "resolved", data: result });
        resolve();
      });

      worker.on("error", () => {
        results.push({ status: "error", data: null });
        resolve();
      });
    });
  });

  await Promise.all(promises);
  console.log(results);
};

await performCalculations();
