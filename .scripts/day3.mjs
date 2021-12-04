// Users/zac/.kenv/kenvs/aoc2021/scripts/day3.ts
import "@johnlindquist/kit";
var input = await get("https://adventofcode.com/2021/day/3/input", {
  headers: {
    cookie: "session=53616c7465645f5f55e1fb3a3f9702aca3c9d93b4bf75cf41177047e668bbe9578f7b325323f4b6b777532beb31b8f96"
  }
}).then((r) => r.data).catch((err) => {
  console.log(err);
});
var testData = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;
var obj = {};
var length = 0;
input.split("\n").reduce((p, c, i, a) => {
  if (i === 1) {
    length = a.length;
    p.split("").map((bit, i2) => {
      obj = {
        ...obj,
        [i2]: parseInt(bit)
      };
    });
  }
  c.split("").map((bit, i2) => {
    obj[i2] += parseInt(bit);
  });
  return c;
});
console.log(obj);
var gammaRate = "";
Object.keys(obj).map((val, i, arr) => {
  if (obj[val] > length / 2) {
    gammaRate += "1";
  } else {
    gammaRate += "0";
  }
});
var epsilonRate = gammaRate.split("").map((val) => parseInt(val) === 1 ? "0" : "1").join("");
console.log("gammaRate: ", gammaRate);
console.log("epsilonRate: ", epsilonRate);
console.log("power consumption: ", parseInt(gammaRate, 2) * parseInt(epsilonRate, 2));
function findMostCommonBit(bitArray) {
  let bitObj;
  bitArray.split("\n").reduce((p, c, i, a) => {
    if (i === 1) {
      length = a.length;
      p.split("").map((bit, i2) => {
        bitObj = {
          ...bitObj,
          [i2]: parseInt(bit)
        };
      });
    }
    c.split("").map((bit, i2) => {
      bitObj[i2] += parseInt(bit);
    });
  });
  return bitObj;
}
var oxygenGeneratorArray = testData.split("\n");
oxygenGeneratorArray.map((value, i) => {
  let bitObj = findMostCommonBit(oxygenGeneratorArray);
  if (bitObj[i] >= length / 2) {
    oxygenGeneratorArray = oxygenGeneratorArray.filter((val) => {
      return bitObj[i] >= length / 2;
    });
  } else {
    oxygenGeneratorArray = oxygenGeneratorArray.filter((val) => {
      return bitObj[i] < length / 2;
    });
  }
});
console.log(oxygenGeneratorArray);
var c02ScrubberArray = input.split("\n");
var oxygenGeneratorRating = parseInt(oxygenGeneratorArray[0], 2);
console.log("obj: ", obj);
console.log("length / 2", length / 2);
console.log("oxygenGeneratorRating: ", oxygenGeneratorRating);
