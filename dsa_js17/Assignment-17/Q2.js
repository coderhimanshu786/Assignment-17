//COMPLEXITY
// TIME COMPLEXITY O(N)
// SPACE COMPLEXITY O(1)

const maxSubarraySumCircular = function(arr) {
    let n = arr.length;
    var maxSubarraySum = () => {
        let sum = arr[0], cur = arr[0];
        for (let i = 1; i < n; i++) {
            cur = Math.max(arr[i], arr[i] + cur);
            sum = Math.max(cur, sum);
        }
        return sum;
    }
    
    let maxSum = maxSubarraySum();
    if (maxSum < 0) return maxSum;
    
    let allSum = 0;
    for (let i = 0; i < n; i++) {
        allSum += arr[i];
        arr[i] = -arr[i]; // we will reverse the array to get the minimum sum of array.
    }
    
    let maxCircularSum = allSum + maxSubarraySum(); 
    // we get minSum and add it to sum of all elements.
    // So this will get the circular sum if an array. We basically removing the min sum, 
    // how we removed is inverting the sign of each element. And adding it to the allSum.
    return Math.max(maxCircularSum, maxSum);
};
//Print
//Example-1
console.log(maxSubarraySumCircular([1,-2,3,-2]));
//Example-2
console.log(maxSubarraySumCircular([5,-3,5]));
//Example-3
console.log(maxSubarraySumCircular([-3,-2,-3]));