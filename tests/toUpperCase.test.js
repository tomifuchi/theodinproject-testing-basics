const {toUpperCase} = require('../src/toUpperCase');

describe('toUpperCase', () => {
 	it('Should toUpperCase a string', () => {
 		const input = 'hello';
 		const expectedResult = 'HELLO';
 		expect(toUpperCase(input)).toBe(expectedResult);
 	});

	it('should not modify a blank string', () => {
		const input = '';
		const expectedResult = '';
		expect(toUpperCase(input)).toBe(expectedResult);
	});

	it('should toUpperCase all letters in a string within special characters', () => {
		const input = 'hello (world)';
		const expectedResult = 'HELLO (WORLD)';
		expect(toUpperCase(input)).toBe(expectedResult);
	});

	it('should toUpperCase all letters in a string with special characters', () => {
		const input = `@"!#$%&/()=?»«@£§€{}.-;<>_,";hello  world!`
		const expectedResult = `@"!#$%&/()=?»«@£§€{}.-;<>_,";HELLO  WORLD!`
		expect(toUpperCase(input)).toBe(expectedResult);
	});
});
