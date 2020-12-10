
// https://www.hackerrank.com/challenges/simple-array-sum/problem
// Given an array of integers, find the sum of its elements.

// Function Description
// simpleArraySum has the following parameter(s):
    // ar: an array of integers
// Input Format
    // The first line contains an integer, , denoting the size of the array.
    // The second line contains  space-separated integers representing the array's elements.

// Output Format
    // Print the sum of the array's elements as a single integer.

// Solution #1:
function simpleArraySum(ar) {
    return ar.reduce((accumulator, currentItem) => accumulator + currentItem)
}
simpleArraySum([1,2,3,4,5])

// Solution #2:

function simpleArraySum(ar) {
    let sum = 0
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i]
    }
    return sum
}
simpleArraySum([1,2,3,4,5])