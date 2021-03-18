const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
		let min = i;
		let temp = array[i];
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}
		array[i] = array[min];
		array[min] = temp;
	}
	console.log(array);
}
selectionSort(numbers);
