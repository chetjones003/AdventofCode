import { readFileSync } from "fs";
const input: string = readFileSync("./input/year_2015/day3.txt", "utf8");

enum Direction {
  NORTH = "^",
  EAST = ">",
  SOUTH = "v",
  WEST = "<",
}

type Vec2 = {
  x: number;
  y: number;
};

export function part1(): Vec2 {
  const arr = input.trim().split("");
  const startingPoint: Vec2 = { x: 0, y: 0 };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === Direction.NORTH) {
      startingPoint.y += 1;
    } else if (arr[i] === Direction.EAST) {
      startingPoint.x += 1;
    } else if (arr[i] === Direction.SOUTH) {
      startingPoint.y -= 1;
    } else if (arr[i] === Direction.WEST) {
      startingPoint.x -= 1;
    }
  }
  return startingPoint;
}

console.log("part1: ", part1());
