import express from "express";
import { marshallNumber, calculateFibonacci } from "./utils";

export const server = (workerPid: number, workedId?: number) => {
  const port = process.env.PORT;

  if (!port) {
    throw "No PORT value was provided, check your env variables.";
  }

  const app = express();

  app.get("/:number", (request, response) => {
    console.log(
      `[Worker handling request][PID: ${workerPid}][Id: ${workedId}]`
    );

    const value = marshallNumber(request.params.number);
    if (typeof value !== "number") {
      return response
        .status(400)
        .send(`Invalid value: ${request.params}, must be a number.`);
    }

    let number = calculateFibonacci(value);
    response.send(`<h1>${number}</h1>`);
  });

  app.listen(port, () =>
    console.log(`Express App is running on PORT : ${port}`)
  );
};
