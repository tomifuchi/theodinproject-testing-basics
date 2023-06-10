const error_msg = 'Input arent of type number'
const div_zero = 'Division by zero!'

function addition(a, b) {
	if(testInput(a) && testInput(b))
	return a + b;
	else throw Error(error_msg)
}

function subtraction(a, b) {
	if(testInput(a) && testInput(b))
	return a - b;
	else throw Error(error_msg)
}

function division(a, b) {
	if(testInput(a) && testInput(b)) {
		if(b == 0) throw Error(div_zero);
		return a / b;
	}
	else throw Error(error_msg)
}

function multiplication(a, b) {
	if(testInput(a) && testInput(b))
	return a * b;
	else throw Error(error_msg)
}

function testInput(x) {
	return (typeof x === 'number' && !isNaN(x));
}

module.exports = {addition, subtraction, division, multiplication}
