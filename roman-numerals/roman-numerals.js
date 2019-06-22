export const toRoman = input => {
	if (!input) return;

	let number = parseInt(input, 10),
		output = '';

	while (number > 0) {
		const [decimal, numeral] = getNumeral(number);

		output += numeral;
		number -= decimal;
	}

	return output;
};

const getNumeral = num => {
	const numerals = {
			1: 'I',
			4: 'IV',
			5: 'V',
			9: 'IX',
			10: 'X',
			40: 'XL',
			50: 'L',
			90: 'XC',
			100: 'C',
			400: 'CD',
			500: 'D',
			900: 'CM',
			1000: 'M',
		},
		decimals = Object.keys(numerals);

	const closest = decimals.reduce((prev, curr) => {
		if (curr > num) return prev;

		return Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev;
	});

	return [closest, numerals[closest]];
};
