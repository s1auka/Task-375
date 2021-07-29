const NUMBER = 2;

function decimalToBinary(number) {
	return number.toString(2).split("").reverse().join(", ");
}

console.log(decimalToBinary(NUMBER));