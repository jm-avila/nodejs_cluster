import cluster from "cluster";
import { config } from "dotenv";
import { getMaxWorkers } from "./utils";

config();

if (cluster.isPrimary) {
  const { maxWorkers, totalCPUs } = getMaxWorkers();

  console.log(`Total Number of CPU Counts is ${totalCPUs}`);
  console.log(`Max Number of Workers is ${maxWorkers}`);

  // Fork Cluster
} else {
  console.log(`Worker Process Id - ${cluster.worker?.id}`);
}
