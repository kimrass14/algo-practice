
// PSEUDO
// input is space separated positive integers. First set of 3 numbers are for Alice. Second set of 3 numbers are for Bob.
//define variables for both reviewer's score
//if / else to compare Alice's score to Bob's corresponding rating
//add to reviewer's score based on conditionals
// return an array with two numbers. First is Alice's score, second is Bob's score

const a = [5,6,7]
const b = [3,6,10]

function compareTriplets(a, b) {
    
    let score = [0,0]
    
    for (let i = 0; i < a.length; i++) {
        
            if (a[i] > b[i]) {
                score[0]++
            } else if (a[i] < b[i]) {
                score[1]++
            }
    }
    return score

}
console.log(compareTriplets(a, b))