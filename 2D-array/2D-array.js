//input is 2d array
//define array of 16 hourglass sums
//loop over outer array
//nest loop over inner array through index 3
    //add first three indices
    //add outer array+1 index of inner array+1
    //add outer array+2 index of inner array, +1, +2

const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

function hourglassSum(arr) {
    const hourglassSums = []
    for (let i = 0; i < arr.length-2; i++) {
        const innerLength = arr[i].length
        for(let j = 0; j < innerLength-2; j++) {
            let hourglass = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            hourglassSums.push(hourglass)
        }
    }
    console.log(Math.max(...hourglassSums))
}
hourglassSum(arr)