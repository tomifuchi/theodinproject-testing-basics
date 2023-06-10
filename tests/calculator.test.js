const {addition, subtraction, division, multiplication} = require('../src/calculator');

describe('calculator', () => {
	const error_msg = 'Input arent of type number';
	const div_zero = 'Division by zero!';

	it('should add two numbers', () => {
		const a = 2;
		const b = 3;
		expect(addition(a,b)).toEqual(5);
	});

	it('should subtract two numbers', () => {
		const a = 2;
		const b = 3;
		expect(subtraction(a,b)).toEqual(-1);
	});

	it('should divide one number by another', () => {
		const a = 5;
		const b = 2;
		expect(division(a,b)).toEqual(5/2);
	});

	it('should multiply two numbers together', () => {
		const a = 3;
		const b = 4;
		expect(multiplication(a,b)).toEqual(12);
	});

	it('should reject addition with invalid inputs', () => {
		const a = 'hello';
		expect(() => addition(a,2)).toThrow(error_msg);
	});

	it('should reject subtraction with invalid inputs', () => {
		const a = {};
		expect(() => subtraction(2,a)).toThrow(error_msg);
	});

	it('should reject division with invalid inputs', () => {
		const a = 0/0; //NaN
		const b = {} //NaN
		const c = 0;
		expect(() => division(5,a)).toThrow(error_msg);
		expect(() => division(5,b)).toThrow(error_msg);
		expect(() => division(5,c)).toThrow(div_zero);
	});

	it('should reject multiplication invalid inputs', () => {
		const a = [1];
		expect(() => multiplication(2,a)).toThrow(error_msg);
	});

	it('should return 0 when called with string inputs', () => {
		const a = '5';
		expect(() => addition(a,2)).toThrow(error_msg);
	});

	it('should return 0 when called with string inputs', () => {
		const a = '';
		expect(() => subtraction(2,a)).toThrow(error_msg);
	});
});
