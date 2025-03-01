export const toUpperCase = (str: string) => {
	return str.toUpperCase();
};

export const truncate = (str: string, maxLength: number) => {
	if (str.length < maxLength) return str;

	let reversed = str.substring(0, maxLength).split(' ').reverse();

	if (reversed[0].length < 3) {
		reversed = reversed.slice(2);
	} else {
		reversed = reversed.slice(1);
	}

	return reversed.reverse().join(' ') + '...';
};

export const recordTypeEnum = [
	'Saints',
	'Miracles',
	'Our Lady',
	'Country',
	'Language',
	'Communions'
] as const;

