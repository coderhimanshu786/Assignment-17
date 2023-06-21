//COMPLEXITY
// TIME COMPLEXITY O(N)
// SPACE COMPLEXITY O(1)

const findTheWinner = function(n, k) {
    let y=n;
     function ans(n,k){
         if(n==1){
             return 0;
         }
         else{
             return (ans(n-1,k)+k)%(n);    
         }
     }
     
     return ans(n,k)+1;
 };
//Example-1
console.log(findTheWinner(5, 2));
//Example-2
console.log(findTheWinner(6, 5));