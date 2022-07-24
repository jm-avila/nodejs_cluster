import cluster, { Worker } from "cluster";
import { config } from "dotenv";
import { getMaxWorkers } from "./utils";
import { server } from "./server";

config();

const logEvent = (event: string) => (worker: Worker) =>
  console.log(
    `[Worker ${event}][Id: ${worker.id}][PID: ${worker.process.pid}]`
  );

if (cluster.isPrimary) {
  const maxWorkers = getMaxWorkers();

  const workerList: Worker[] = [];
  while (workerList.length < maxWorkers) {
    const worker = cluster.fork();
    workerList.push(worker);
  }

  const onlineEvent = "online";
  cluster.on(onlineEvent, logEvent(onlineEvent));

  const exitEvent = "exit";
  cluster.on(exitEvent, logEvent(exitEvent));
} else {
  const { id, process } = cluster.worker;
  server(id, process.pid);
}
