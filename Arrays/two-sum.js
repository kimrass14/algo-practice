//without nested loops
const twoSum1 = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		let int = target - nums[i];
		const index = nums.indexOf(int, i + 1); //indexOf: int looking for, index to start at
		if (index >= 0) {
			return [i, index];
		}
	}
	return console.log('No sum');
};
twoSum1([2, 7, 11, 15], 9);

//hash map
const twoSum = (nums, target) => {
	const obj = {};
	for (let i = 0; i < nums.length; i++) {
		const int = target - nums[i];
		if (int in obj) {
			return [i, obj[int]];
		} else {
			obj[nums[i]] = i;
		}
		console.log('obj', obj);
	}
	return 'no sum';
};
twoSum([2, 7, 11, 15], 9);

//Nested loop
const twoSum2 = (array, target) => {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === target) {
				const sum = [array[i], array[j]];
				return sum;
			}
		}
	}
	return console.log('No sum');
};
twoSum2([2, 7, 11, 15], 9);
