//input is array of binary integers
//get length of array
//each jump must be to another position only 1 or 2 indexes away
//skip over '1's in array
//count number of jumps to get to the end

//assign counter
//if first integer array[0] is 0, then:
//for each loop:
//if array[0+2] === 0, then add to counter and i+2
//if else, array[0+1], then add to counter

// c.length = 7
//will loop through i = 6
//but only want to loop through index 5

const array1 = [0,0,1,0,0,0,0]

function jumpingOnClouds(c) {
    let counter = 0
    for (let i = 0; i < c.length-1; i++) {
        if (c[i+2] === 0) {
            counter++
            i++
        } else {
            counter++
        }
    }
    console.log('counter =', counter)
}
jumpingOnClouds(array1)