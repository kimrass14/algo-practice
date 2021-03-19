const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const insertionSort = (array) => {

    for (let i=1; i < array.length; i++) { // i = 1, 44
        const current = array[i]
        let j = i - 1                     //j = 0, 99
        while (j >= 0 && array[j] > current) {
            array[j+1] = array[j]           //[99,99]
            j--
        }
        array[j + 1] = current             //array[-1 + 1] = 44, [44,99]
    }
}
insertionSort(numbers);
console.log(numbers);
