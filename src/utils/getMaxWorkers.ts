import { cpus } from "os";
import { z } from "zod";

const getArbitraryMaxWorkers = () => {
  const validationResult = z
    .number()
    .safeParse(+process.env.ARBITRARY_MAX_WORKERS);
  if (validationResult.success) return validationResult.data;
};

export const getMaxWorkers = () => {
  const totalCPUs = cpus().length;
  const arbitraryMaxWorkers = getArbitraryMaxWorkers();
  const isValidArbitraryMaxWorkers =
    typeof arbitraryMaxWorkers === "number" && arbitraryMaxWorkers <= totalCPUs;
  return {
    totalCPUs,
    maxWorkers: isValidArbitraryMaxWorkers ? arbitraryMaxWorkers : totalCPUs,
  };
};
