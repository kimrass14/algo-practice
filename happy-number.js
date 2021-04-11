const isHappy = (n) => {
    const obj = {}
    while (!obj[n]) {
        obj[n] = true
        const digitsArr = n
					.toString()
					.split('')
					.map((num) => parseInt(num));

        let sumOfDigits = 0;
        for (let i = 0; i < digitsArr.length; i++) {
            const digitSquared = digitsArr[i] * digitsArr[i];
            sumOfDigits += digitSquared;
        }
        if (sumOfDigits === 1) {
            return true;
        }
        n = sumOfDigits;
    }
    return false   
}
isHappy(19)