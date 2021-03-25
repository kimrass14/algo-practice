const s = ['h', 'e', 'l', 'l', 'o'];
// ["o","l","l","e","h"]

const reverseString = (s) => {
	s.reverse();
	return s;
};
reverseString(s);

//not space efficient
const reverseString2 = (string) => {
	for (let i = 1; i < string.length; i++) {
		const removed = string.splice(i, 1);
		string.unshift(removed[0])
	}
    return console.log(string);
};
// reverseString2(s);
