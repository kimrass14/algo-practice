const balancedBracket = (string) => {
	const bracketArray = string.split('');

	const map = {
		'{': '}',
		'[': ']',
		'(': ')',
	};

	const stack = [];
	for (let i = 0; i < bracketArray.length - 1; i++) {
		if (bracketArray[i] in map) {
			stack.push(map[bracketArray[i]]);
			console.log('add to stack', stack);
		} else {
			if (stack.pop() !== bracketArray[i]) {
				return false;
			} else {
				// stack.pop()
				console.log('match and pop off', stack);
			}
		}
	}

	return stack.length > 0;
};
balancedBracket('{{{()}');
