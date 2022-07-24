import { z } from "zod";

export const marshallNumber = (value: string): number | undefined => {
  const intValue = Number.parseInt(value);
  const validationResult = z.number().safeParse(intValue);
  if (validationResult.success) return validationResult.data;
};
