var a = 2,
	b = 4,
	value = (a*a) - (2*a*b) - (b*b);
	console.log(value);

	if (value >= 0) {
		console.log('Wynik dodatni');
	} else if (value < 0) {
		console.log('Wynik ujemny');
	} 

	if (value === 0) {
		console.log('Wynik jest rowny 0');
	} else if (value != 0) {
		console.log('Wynik jest rozny od zera');
	}
