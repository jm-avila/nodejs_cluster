import { cpus } from "os";
import { marshallNumber } from "./marshallNumber";

export const getMaxWorkers = () => {
  const totalCPUs = cpus().length;
  const arbitraryMaxWorkers = marshallNumber(process.env.ARBITRARY_MAX_WORKERS);
  const isValidArbitraryMaxWorkers = arbitraryMaxWorkers <= totalCPUs;
  const maxWorkers = isValidArbitraryMaxWorkers
    ? arbitraryMaxWorkers
    : totalCPUs;

  console.log(`Number of CPU's: ${totalCPUs}`);
  console.log(`Number of Workers: ${maxWorkers}`);

  return maxWorkers;
};
