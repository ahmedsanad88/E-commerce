export const createArray = (num: number): number[] => {
  const result: number[] = [];
  let start = 1;
  while (start <= num) {
    result.push(start);
    start += 1;
  }
  return result;
};
