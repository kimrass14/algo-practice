//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

const plusOne = (digits) => {
    const lastDigit = digits.length-1
    for (let i = lastDigit; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i]++
            break
        } else if (i === 0) {
            digits[i] = 0
            digits.unshift(1)
        } else {
            digits[i] = 0
        } 
    }
    return digits
}
// plusOne([4,3,2,1])
plusOne([4,3,9,9])