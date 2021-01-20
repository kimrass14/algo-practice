//find largest integer in unsorted array

const array = [20, 100, 15, 4, 89]

const maxInt = (array) => {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    console.log(max)
}
maxInt(array)