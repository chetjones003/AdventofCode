import { readFileSync } from "fs";
import {
  countUniqueCoordinates,
  splitArrayEveryOther,
  splitArrayEveryOtherPlusOne,
} from "../lib/helpers";

const input: string[] = readFileSync("./input/year_2015/day3.txt", "utf8")
  .trim()
  .split("");

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

export function part1(): number {
  const vistited_coordinates = getAllCoordinates(input);
  return countUniqueCoordinates(vistited_coordinates);
}

export function part2(): number {
  const santasCoordinates = getAllCoordinates(splitArrayEveryOther(input));
  const robosCoordinates = getAllCoordinates(
    splitArrayEveryOtherPlusOne(input),
  );
  const allCoords = santasCoordinates.concat(robosCoordinates);
  return countUniqueCoordinates(allCoords);
}

function getAllCoordinates(arr: string[]): number[][] {
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

  return vistited_coordinates;
}

console.log("part1: ", part1());
console.log("part2: ", part2());
