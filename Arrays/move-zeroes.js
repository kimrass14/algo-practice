//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const moveZeroes = (nums) => {
    const length = nums.length-1
    let counter = 1
    for (let i=0; counter <= length; i++) {
        if (nums[i] === 0) {
            nums.splice(i,1)
            nums.push(0)
            i--
            counter++
            console.log(nums)
        } else {
            counter++
        }
    }
    return nums
}
moveZeroes([0,0,1])