//nested loop - O(n^2)
const containsDuplicate = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
        
    }
    return false
}
containsDuplicate([1,2,3,1])

//compare to another array - O(n)
const containsDuplicate2 = (nums) => {
    let array = []
    for (let i = 0; i < nums.length; i++) {
        if(array.includes(nums[i])) {
            return true
        } else {
            array.push(nums[i])
        }
    }
    return false
}
containsDuplicate2([1,2,3,1])

//using a hash / object
const containsDuplicate3 = (nums) => {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        // console.log(obj.nums[i])
        if (obj[nums[i]]) {
            return true
        } else {
            obj[nums[i]] = 0
        }
    }
    return false
}
containsDuplicate3([1,2,3,1])

//Sorting array, loop through and compare each to previous number
const containsDuplicate4 = (nums) => {
    const sortedArr = nums.sort()

    for (let i=1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            return true
        }
    }
    return false
}
containsDuplicate4([1,2,3,1])
