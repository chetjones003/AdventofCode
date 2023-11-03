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

function countUniques(arr: number[][]) {
  const uniques = Array.from(new Set(arr.map((a) => a.join("|"))), (s) =>
    s.split("|").map(Number),
  );
  return [...uniques].length;
}

export function part1(): number {
  const arr: string[] = input.trim().split("");
  const vistited_coordinates: number[][] = [[0, 0]];
  const startingPoint: Vec2 = { x: 0, y: 0 };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === Direction.NORTH) {
      startingPoint.y += 1;
      vistited_coordinates.push([startingPoint.x, startingPoint.y]);
    } else if (arr[i] === Direction.EAST) {
      startingPoint.x += 1;
      vistited_coordinates.push([startingPoint.x, startingPoint.y]);
    } else if (arr[i] === Direction.SOUTH) {
      startingPoint.y -= 1;
      vistited_coordinates.push([startingPoint.x, startingPoint.y]);
    } else if (arr[i] === Direction.WEST) {
      startingPoint.x -= 1;
      vistited_coordinates.push([startingPoint.x, startingPoint.y]);
    }
  }

  return countUniques(vistited_coordinates);
}

console.log("part1: ", part1());
