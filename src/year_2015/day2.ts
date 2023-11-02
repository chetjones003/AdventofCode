import { readFileSync } from "fs";
import { splitAndParseInt, splitIntoThree } from "../lib/helpers";
import { bubbleSort } from "../lib/algorithms";
const input = readFileSync("./input/year_2015/day2.txt", "utf8");

export function part1(): number {
  const arr: number[] = splitAndParseInt(input, /x|\s/);
  const newArr: number[][] = splitIntoThree(arr);

  let totalSurfaceArea: number = 0;
  let extra: number = 0;
  for (let i = 0; i < newArr.length; i++) {
    totalSurfaceArea +=
      2 * newArr[i][0] * newArr[i][1] +
      2 * newArr[i][1] * newArr[i][2] +
      2 * newArr[i][0] * newArr[i][2];
    const sortedArr: number[] = bubbleSort(newArr[i]);
    extra += sortedArr[0] * sortedArr[1];
  }

  return totalSurfaceArea + extra;
}

export function part2(): number {
  const arr: number[] = splitAndParseInt(input, /x|\s/);
  const newArr: number[][] = splitIntoThree(arr);

  let wrapping: number = 0;
  let bow: number = 0;
  for (let i = 0; i < newArr.length; i++) {
    const sortedArr: number[] = bubbleSort(newArr[i]);
    wrapping += 2 * sortedArr[0] + 2 * sortedArr[1];
    bow += sortedArr[0] * sortedArr[1] * sortedArr[2];
  }

  return wrapping + bow;
}

console.log("part1: ", part1());
console.log("part2: ", part2());
