const {capitalize} = require('../src/capitalize');

describe('capitalize', () => {
 	it('Should capitalize a string', () => {
 		const input = 'hello';
 		const expectedResult = 'HELLO';
 		expect(capitalize(input)).toBe(expectedResult);
 	});

	it('should not modify a blank string', () => {
		const input = '';
		const expectedResult = '';
		expect(capitalize(input)).toBe(expectedResult);
	});

	it('should capitalize all letters in a string within special characters', () => {
		const input = 'hello (world)';
		const expectedResult = 'HELLO (WORLD)';
		expect(capitalize(input)).toBe(expectedResult);
	});

	it('should capitalize all letters in a string with special characters', () => {
		const input = `@"!#$%&/()=?»«@£§€{}.-;<>_,";hello  world!`
		const expectedResult = `@"!#$%&/()=?»«@£§€{}.-;<>_,";HELLO  WORLD!`
		expect(capitalize(input)).toBe(expectedResult);
	});
});
