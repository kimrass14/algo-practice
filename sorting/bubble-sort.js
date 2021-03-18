//O(n^2) time
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    //repeat this 11 times
	for (let i = 0; i < array.length - 1; i++) {
		for (let i = 0; i < array.length - 1; i++) {
			//compare item to next item
            //swap position if first item is larger
            if (array[i] > array[i + 1]) {
				const temp = array[i + 1];
				array[i + 1] = array[i];
				array[i] = temp;
			}
		}
	}
    console.log(array)
}
bubbleSort(numbers);
