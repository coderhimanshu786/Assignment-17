//COMPLEXITY
// TIME COMPLEXITY O(logN)
// SPACE COMPLEXITY O(1)

const deckRevealedIncreasing = function(deck) {
    const sortedArray = deck.sort((a,b)=>a-b)
    const res=[]
    const generatedArray = deck.map((i, index) => index)
    for(let i=0; i<sortedArray.length;i++){
        const shift = generatedArray.shift()
        res[shift]=sortedArray[i]
        const shift2 = generatedArray.shift()
        generatedArray.push(shift2)
    }
    return res;
};
//Example-1
console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]));
//Example-2
console.log(deckRevealedIncreasing([1,1000]));