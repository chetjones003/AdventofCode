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
export function splitIntoThree<T>(arr: T[]): T[][] {
  const newArr: T[][] = [];
  while (arr.length) {
    newArr.push(arr.splice(0, 3));
  }
  return newArr;
}

/**
 *
 * Returns the number of unique coordinates in an array
 *
 * # Example
 * [[0, 0], [1, 0], [0, 0]] -> 2
 *
 * @param {number[][]} arr - Any size
 *
 */
export function countUniqueCoordinates(arr: number[][]): number {
  const uniques = Array.from(new Set(arr.map((a) => a.join("|"))), (s) =>
    s.split("|").map(Number),
  );
  return [...uniques].length;
}

/**
 *
 * splits an array into every other element
 *
 * # Example
 * ["0", "1", "2", "3", "4"] -> ["0", "2", "4"]
 *
 * @param {string[]} input - Any size
 *
 */
export function splitArrayEveryOther<T>(input: T[]): T[] {
  let newArr: T[] = [];
  for (let i = 0; i < input.length; i++) {
    newArr = input.filter((_, index) => {
      return (index + 1) % 2 === 0;
    });
  }
  return newArr;
}

/**
 *
 * splits an array into every other element offset + 1
 *
 * # Example
 * ["0", "1", "2", "3", "4"] -> ["1", "3"]
 *
 * @param {string[]} input - Any size
 *
 */
export function splitArrayEveryOtherPlusOne<T>(input: T[]): T[] {
  let newArr: T[] = [];
  for (let i = 0; i < input.length; i++) {
    newArr = input.filter((_, index) => {
      return index % 2 === 0;
    });
  }
  return newArr;
}
