/**
 *
 * Returns a number mapped array split on either a string or regex expression
 * with the last (should be empty) element removed
 *
 * @param {number[]} arr - Any size
 * @param {string | RegExp} target - What to split on
 *
 */
export function splitAndParseInt(
  arr: string,
  target: string | RegExp,
): number[] {
  return arr.split(target).slice(0, -1).map(Number);
}

/**
 *
 * Returns a new 2D array split into elements of three
 *
 * # Example
 * [1, 2, 3, 4, 5, 6] -> [[1, 2, 3], [4, 5, 6]]
 *
 * @param {number[]} arr - Any size
 *
 */
export function splitIntoThree(arr: number[]): number[][] {
  const newArr: number[][] = [];
  while (arr.length) {
    newArr.push(arr.splice(0, 3));
  }
  return newArr;
}
