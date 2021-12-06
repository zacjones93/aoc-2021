import "@johnlindquist/kit"

let input = [3,4,3,1,2,1,5,1,1,1,1,4,1,2,1,1,2,1,1,1,3,4,4,4,1,3,2,1,3,4,1,1,3,4,2,5,5,3,3,3,5,1,4,1,2,3,1,1,1,4,1,4,1,5,3,3,1,4,1,5,1,2,2,1,1,5,5,2,5,1,1,1,1,3,1,4,1,1,1,4,1,1,1,5,2,3,5,3,4,1,1,1,1,1,2,2,1,1,1,1,1,1,5,5,1,3,3,1,2,1,3,1,5,1,1,4,1,1,2,4,1,5,1,1,3,3,3,4,2,4,1,1,5,1,1,1,1,4,4,1,1,1,3,1,1,2,1,3,1,1,1,1,5,3,3,2,2,1,4,3,3,2,1,3,3,1,2,5,1,3,5,2,2,1,1,1,1,5,1,2,1,1,3,5,4,2,3,1,1,1,4,1,3,2,1,5,4,5,1,4,5,1,3,3,5,1,2,1,1,3,3,1,5,3,1,1,1,3,2,5,5,1,1,4,2,1,2,1,1,5,5,1,4,1,1,3,1,5,2,5,3,1,5,2,2,1,1,5,1,5,1,2,1,3,1,1,1,2,3,2,1,4,1,1,1,1,5,4,1,4,5,1,4,3,4,1,1,1,1,2,5,4,1,1,3,1,2,1,1,2,1,1,1,2,1,1,1,1,1,4]
let testData = [3,4,3,1,2]

let newInput =  input.reduce((prev, curr, i) => {

  if(prev[curr]?.count) {
    return {
      ...prev,
      [curr]: { 
        count: prev[curr].count += 1, 
        timer: curr
    }
    }
  } else {
    return {
      ...prev,
      [curr]: { count: 1, timer: curr}
    }
  }

}, {})

//console.log(newInput)

class LanternFishSchool {
  constructor(initialSchool: number[]) {
    this.lanternFish = initialSchool 
    this.schoolSize = initialSchool.length
  }
  private lanternFish: number[];
  schoolSize: number;
  private populateFish(i) {
    this.lanternFish.push(8)
    this.lanternFish[i] = 6
    this.schoolSize += 1
  }
  private fishTimer(i) {
    this.lanternFish[i] -= 1
  }
  incrementDay() {
    this.lanternFish.map((fish, i) => {
      fish -= 1
      if(fish < 0) {
        this.populateFish(i)
      } else {
        this.fishTimer(i)
      }
    })
  };
}


function range(start = 0, end) {
  if(start === end) return [start];
  return [start, ...range(start + 1, end)];
}

function simulateDays(days) {
  let daysAsRange = range(0, days - 1)

  let schoolOfFish = new LanternFishSchool(input)
  
  daysAsRange.map((_, i) => {
    schoolOfFish.incrementDay()
  })

  console.log(schoolOfFish.schoolSize)
}

//simulateDays(80)

function calculateFish(school){
  return Object.keys(school).reduce((prev, curr) => {
    return prev + school[curr].count
  }, 0)
}

function simulateObjectDays(days) {
  let daysAsRange = range(0, days - 1)

  let newFish = daysAsRange.map(() => {
    Object.keys(newInput).map((key, i, arr) => {

      newInput[key].timer -= 1

      if(newInput[key].timer < 0) {
        newInput[key].timer = 6
        
        if(newInput[arr.length + 1]) {
          newInput[arr.length + 1].count += newInput[key].count
        } else {
          newInput[arr.length + 1] = { count: newInput[key].count, timer: 8}
        }
      }
    })
  })
  console.log(calculateFish(newInput))

}

simulateObjectDays(256)