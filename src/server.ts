import express from "express";
import { marshallNumber, calculateFibonacci } from "./utils";

export const server = (workedId: number, workerPid: number) => {
  const port = process.env.PORT;
  const app = express();

  app.get("/:number", (request, response) => {
    console.log(
      `[Worker handling request][Id: ${workedId}][PID: ${workerPid}]`
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
