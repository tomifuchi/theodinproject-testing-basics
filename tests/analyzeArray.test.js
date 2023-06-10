const {analyzeArray} = require('../src/analyzeArray');

describe('analyzeArray()', () => {
	it('should return an object with properties max, min, length and average', () => {
		const arr = [10, 5, 20, 3];
		expect(analyzeArray(arr)).toEqual({
			max: 20,
			min: 3,
			length: 4,
			average: (10 + 5 + 20 + 3) / 4
		});
	});

	it('should return an object with no properties if the array is empty', () => {
		const arr = [];
		expect(analyzeArray(arr)).toEqual({});
	});

	it('should throw an error if the array contains invalid values', () => {
		const arr = ['hello'];
		expect(() => analyzeArray(arr)).toThrow('Array is not of type number or has undefined in it');
	});

	it('should return an object with properties even if the array contains only one value', () => {
		const arr = [5];
		expect(analyzeArray(arr)).toEqual({
			max: 5,
			min: 5,
			length: 1,
			average: 5
		});
	});
});
