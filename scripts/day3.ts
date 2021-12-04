import "@johnlindquist/kit"


let input = await get("https://adventofcode.com/2021/day/3/input",
{
  headers: {
    cookie: "session=53616c7465645f5f55e1fb3a3f9702aca3c9d93b4bf75cf41177047e668bbe9578f7b325323f4b6b777532beb31b8f96"
  },
}
).then(r => r.data).catch((err => {console.log(err)})) as string


let testData = `00100
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
01010`


let obj = {}
let length = 0
// let ianObj = input.split("\n").reduce((p,c,i,a)=> {
//   if (i === 0) {
//     length = a.length
//   }

//   c.split("").map((bit,i) => {
//     p[i] += parseInt(bit)
//   })
//   return c
// }, {})
// console.log({ianObj})

// zac's solution
input.split("\n").reduce((p,c,i,a)=> {
  if (i === 1) {
    length = a.length
    p.split("").map((bit,i) => {
      obj = {
        ...obj,
        [i]: parseInt(bit)
      }
    })
  }
  c.split("").map((bit,i) => {
    obj[i] += parseInt(bit)
  })
  return c
})

console.log(obj)

let gammaRate = ""
Object.keys(obj).map((val,i, arr) => {
  if(obj[val] > length / 2) {
    gammaRate += "1"
  } else {
    gammaRate += "0"
  }
})
let epsilonRate = gammaRate
                    .split("")
                    .map(
                      (val) => (parseInt(val) === 1) ?  "0" : "1")
                    .join("")

console.log("gammaRate: ", gammaRate)
console.log("epsilonRate: ", epsilonRate)

console.log("power consumption: ", parseInt(gammaRate,2) * parseInt(epsilonRate, 2))


function findMostCommonBit(bitArray) {
  let bitObj

  bitArray.split("\n").reduce((p,c,i,a)=> {
    if (i === 1) {
      length = a.length
      p.split("").map((bit,i) => {
        bitObj = {
          ...bitObj,
          [i]: parseInt(bit)
        }
      })
    }
    c.split("").map((bit,i) => {
      bitObj[i] += parseInt(bit)
    })
  })

  return bitObj
}

function getMostCommonBits(myObj) {
  let tmpRate = ""
  Object.keys(myObj).map((val,i, arr) => {
    if(myObj[val] > length / 2) {
      tmpRate += "1"
    } else {
      tmpRate += "0"
    }
  })

  return tmpRate
}

function getLeastCommonBits(myObj) {
  let tmpRate = ""
  Object.keys(myObj).map((val,i, arr) => {
    if(myObj[val] < length / 2) {
      tmpRate += "1"
    } else {
      tmpRate += "0"
    }
  })

  return tmpRate
}


// calculate most common bit every iteration then filter bytes that don't have that bit in that position
let oxygenGeneratorArray = testData.split("\n")
oxygenGeneratorArray.map((value, i) => { 
  let bitObj = findMostCommonBit(oxygenGeneratorArray)

  if(bitObj[i] >= length / 2) {
    oxygenGeneratorArray = oxygenGeneratorArray.filter((val) => {
      return bitObj[i] >= length / 2
    })
  } else {
    oxygenGeneratorArray = oxygenGeneratorArray.filter((val) => {
      return bitObj[i] < length / 2
    })
  }
})
console.log(oxygenGeneratorArray)

// oxygenGeneratorArray.map((value, i) => {
//   if (oxygenGeneratorArray.length === 1) return
    
//   if(oxygenGeneratorArray.length === 2) {
//     oxygenGeneratorArray = oxygenGeneratorArray.filter((val) => {
//       return parseInt(val[i]) === 1
//     })
//   } else {
//     console.log(oxygenGeneratorArray, `---------${i}------------`)
//     oxygenGeneratorArray = oxygenGeneratorArray.filter((val) => {
//       return gammaRate[i] === val[i]
//     })
//   }
// })

let c02ScrubberArray = input.split("\n")
// c02ScrubberArray.map((value, i) => {
//   if (c02ScrubberArray.length === 1) return
  
//   if(c02ScrubberArray.length === 2) {
    
//     c02ScrubberArray = c02ScrubberArray.filter((val) => {
//       return parseInt(val[i]) === 0
//     })
//   } else {
    
//     c02ScrubberArray = c02ScrubberArray.filter((val) => {
//       return epsilonRate[i] === val[i]
//     })
//   }
// })

let oxygenGeneratorRating = parseInt(oxygenGeneratorArray[0], 2)
//let c02ScrubberRating = parseInt(c02ScrubberArray[0], 2)

console.log("obj: ", obj)
console.log("length / 2", length / 2)
console.log("oxygenGeneratorRating: ", oxygenGeneratorRating)
//console.log("c02ScrubberRating: ", c02ScrubberRating)
//console.log("life support rating: ", oxygenGeneratorRating * c02ScrubberRating)

//["111010101010"]3754
//["000101011110"]350