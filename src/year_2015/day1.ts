import { readFileSync } from "fs";
const input: string = readFileSync("./input/year_2015/day1.txt", "utf8");
let result: number = 0;

export function part1(): number {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      result++;
    } else if (input[i] === ")") {
      result--;
    }
  }

  return result;
}

export function part2(): number {
  let result: number = 0;
  let basementIndex: number = 0;
  let enteredBasement: boolean = false;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      result++;
    } else if (input[i] === ")") {
      result--;
      if (result < 0 && enteredBasement === false) {
        basementIndex = i + 1;
        enteredBasement = true;
      }
    }
  }

  return basementIndex;
}

console.log("part1: ", part1());
console.log("part2: ", part2());
