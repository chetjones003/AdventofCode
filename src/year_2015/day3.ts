import { readFileSync } from "fs";
const input: string = readFileSync("./input/year_2015/day3.txt", "utf8");
const stringArr = input.trim().split("");

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
  const vistited_coordinates = getAllCoordinates(stringArr);
  return countUniques(vistited_coordinates);
}

export function part2(): number {
  const santasCoordinates = getAllCoordinates(splitStringForSanta(stringArr));
  const robosCoordinates = getAllCoordinates(splitStringForRobo(stringArr));
  const allCoords = santasCoordinates.concat(robosCoordinates);
  const allUniques = countUniques(allCoords);

  return allUniques;
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

function countUniques(arr: number[][]) {
  const uniques = Array.from(new Set(arr.map((a) => a.join("|"))), (s) =>
    s.split("|").map(Number),
  );
  return [...uniques].length;
}

function splitStringForSanta(input: string[]): string[] {
  let santasString: string[] = [];
  for (let i = 0; i < input.length; i++) {
    santasString = input.filter((_, index) => {
      return (index + 1) % 2 === 0;
    });
  }
  return santasString;
}

function splitStringForRobo(input: string[]): string[] {
  let robosString: string[] = [];
  for (let i = 0; i < input.length; i++) {
    robosString = input.filter((_, index) => {
      return index % 2 === 0;
    });
  }
  return robosString;
}

console.log("part1: ", part1());
console.log("part2: ", part2());
