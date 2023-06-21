//COMPLEXITY
// TIME COMPLEXITY O(N)
// SPACE COMPLEXITY O(1)

class RecentCounter {
    constructor() {
      this.requests = [];
    }
  
    ping(t) {
      this.requests.push(t);
  
      while (this.requests[0] < t - 3000) {
        this.requests.shift();
      }
  
      return this.requests.length;
    }
  }
  
  const counter = new RecentCounter();
  const methodCalls = ["RecentCounter", "ping", "ping", "ping", "ping"];
  const results = [];
  //traverse over an array
  for (let i = 0; i < methodCalls.length; i++) {
    const method = methodCalls[i];
    if (method === "RecentCounter") {
      results.push("null");
    } else if (method === "ping") {
      const timestamp = "/* provide timestamp here */";
      let result = counter.ping(timestamp);
      results.push(result);
    }
  }

  console.log(results);