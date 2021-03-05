// Given two arrays, write a function to compute their intersection

const intersect = (nums1, nums2) => {
    const obj1 = {}
    for (let i=0; i < nums1.length; i++) {
        obj1[nums1[i]] ? obj1[nums1[i]] += 1 : obj1[nums1[i]] = 1
    }
    
    const returnArr = []
    for (let j=0; j < nums2.length; j++) {
        if (nums2[j] in obj1 && obj1[nums2[j]] > 0) {
            obj1[nums2[j]] -= 1
            returnArr.push(nums2[j])
        }
    }
    return returnArr
}
intersect([1,2,2,1], [2,2])