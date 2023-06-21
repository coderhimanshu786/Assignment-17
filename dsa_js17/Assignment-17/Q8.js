//COMPLEXITY
// TIME COMPLEXITY O(N)
// SPACE COMPLEXITY O(1)

class DataStream {
    constructor(value, k) {
      this.stream = [];
      this.value = value;
      this.k = k;
    }
  
    consec(num) {
      this.stream.push(num);
      if (this.stream.length < this.k) {
        return false;
      }
      const lastKIntegers = this.stream.slice(-this.k);
      return lastKIntegers.every((integer) => integer === this.value);
    }
  }
  
  const methodCalls = ["DataStream", "consec", "consec", "consec", "consec"];
  const methodArgs = [[5, 3], [1], [5], [5], [5]];
  
  const dataStream = new DataStream(...methodArgs[0]);
  const results = [null];
  
  for (let i = 1; i < methodCalls.length; i++) {
    const methodName = methodCalls[i];
    const methodArg = methodArgs[i][0];
    const result = dataStream[methodName](methodArg);
    results.push(result);
  }
  
  console.log(results);
  