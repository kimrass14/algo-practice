// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0


const reverse = (x) => {
	const array = x.toString().split('').reverse().join('');
	const int = parseInt(array);
    const max = Math.pow(2,31)

    if (x < 0) {
        return console.log(int * -1)
    } else if (int > max) {
        return 0
    } else {
        return console.log(int);
    }
	
};
reverse(-120);
