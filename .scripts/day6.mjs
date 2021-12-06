// Users/zac/.kenv/kenvs/aoc2021/scripts/day6.ts
import "@johnlindquist/kit";
var input = [3, 4, 3, 1, 2, 1, 5, 1, 1, 1, 1, 4, 1, 2, 1, 1, 2, 1, 1, 1, 3, 4, 4, 4, 1, 3, 2, 1, 3, 4, 1, 1, 3, 4, 2, 5, 5, 3, 3, 3, 5, 1, 4, 1, 2, 3, 1, 1, 1, 4, 1, 4, 1, 5, 3, 3, 1, 4, 1, 5, 1, 2, 2, 1, 1, 5, 5, 2, 5, 1, 1, 1, 1, 3, 1, 4, 1, 1, 1, 4, 1, 1, 1, 5, 2, 3, 5, 3, 4, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 5, 5, 1, 3, 3, 1, 2, 1, 3, 1, 5, 1, 1, 4, 1, 1, 2, 4, 1, 5, 1, 1, 3, 3, 3, 4, 2, 4, 1, 1, 5, 1, 1, 1, 1, 4, 4, 1, 1, 1, 3, 1, 1, 2, 1, 3, 1, 1, 1, 1, 5, 3, 3, 2, 2, 1, 4, 3, 3, 2, 1, 3, 3, 1, 2, 5, 1, 3, 5, 2, 2, 1, 1, 1, 1, 5, 1, 2, 1, 1, 3, 5, 4, 2, 3, 1, 1, 1, 4, 1, 3, 2, 1, 5, 4, 5, 1, 4, 5, 1, 3, 3, 5, 1, 2, 1, 1, 3, 3, 1, 5, 3, 1, 1, 1, 3, 2, 5, 5, 1, 1, 4, 2, 1, 2, 1, 1, 5, 5, 1, 4, 1, 1, 3, 1, 5, 2, 5, 3, 1, 5, 2, 2, 1, 1, 5, 1, 5, 1, 2, 1, 3, 1, 1, 1, 2, 3, 2, 1, 4, 1, 1, 1, 1, 5, 4, 1, 4, 5, 1, 4, 3, 4, 1, 1, 1, 1, 2, 5, 4, 1, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 4];
var newInput = input.reduce((prev, curr, i) => {
  if (prev[curr]?.count) {
    return {
      ...prev,
      [curr]: {
        count: prev[curr].count += 1,
        timer: curr
      }
    };
  } else {
    return {
      ...prev,
      [curr]: { count: 1, timer: curr }
    };
  }
}, {});
function range(start = 0, end) {
  if (start === end)
    return [start];
  return [start, ...range(start + 1, end)];
}
function calculateFish(school) {
  return Object.keys(school).reduce((prev, curr) => {
    return prev + school[curr].count;
  }, 0);
}
function simulateObjectDays(days) {
  let daysAsRange = range(0, days - 1);
  let newFish = daysAsRange.map(() => {
    Object.keys(newInput).map((key, i, arr) => {
      newInput[key].timer -= 1;
      if (newInput[key].timer < 0) {
        newInput[key].timer = 6;
        if (newInput[arr.length + 1]) {
          newInput[arr.length + 1].count += newInput[key].count;
        } else {
          newInput[arr.length + 1] = { count: newInput[key].count, timer: 8 };
        }
      }
    });
  });
  console.log(calculateFish(newInput));
}
simulateObjectDays(256);
