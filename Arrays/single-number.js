// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

//no loops, no additional arrays or changing size of array

//input is non-empty array of integers
//output is the number that is not a duplicate


const singleNumber = (nums) => {
    const sorted = nums.sort()
    for (let i=0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            i++
        } else {
            return nums[i]
        }
    }
}
singleNumber([4,1,2,1,2])

//using hash
const singleNumberHash = (nums) => {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]] += 1
        } else {
            obj[nums[i]] = 1
        }
    }

    for (let j = 0; j < nums.length; j++) {
        if (obj[nums[j]] < 2) {
            return nums[j]
        }
    }
}
singleNumberHash([4,1,2,1,2])