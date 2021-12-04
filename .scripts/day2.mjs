// Users/zac/.kenv/kenvs/aoc2021/scripts/day2.ts
import "@johnlindquist/kit";
var file = await readFile("./day2.txt", "utf8");
console.log(file);
var input = ``;
var Command;
(function(Command2) {
  Command2["forward"] = "forward";
  Command2["down"] = "down";
  Command2["up"] = "up";
})(Command || (Command = {}));
var commands = input.split("\n").map((v) => v.split(" ").map((v2) => parseInt(v2) ? parseInt(v2) : v2));
var position = {
  horizontal: 0,
  depth: 0,
  aim: 0,
  addHorizontal: (v) => {
    position.horizontal += v;
  },
  addDepth: (v) => {
    position.depth += v * position.aim;
  },
  addAim: (v) => {
    position.aim += v;
  },
  subtractAim: (v) => {
    position.aim -= v;
  }
};
console.log(position);
console.log(position.horizontal * position.depth);
//! TODO: scrape input pages
