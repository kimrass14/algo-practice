const fizzBuzz = (n) => {
	const map = {
		3: 'Fizz',
		5: 'Buzz',
		'3and5': 'FizzBuzz',
	};
	const array = [];
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			array.push('FizzBuzz');
		} else if (i % 3 === 0) {
			array.push('Fizz');
		} else if (i % 5 === 0) {
			array.push('Buzz');
		} else {
			array.push(i.toString());
		}
	}
	return console.log(array);
};
fizzBuzz(15);
