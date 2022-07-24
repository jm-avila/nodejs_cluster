export const calculateFibonacci = (number: number): number => {
  if (number === 0) return 0;
  if (number === 1) return 1;
  return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
};
