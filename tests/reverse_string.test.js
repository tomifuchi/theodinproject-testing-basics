const {reverse_string} = require('../src/reverse_string');

describe('reverse_string', () => {
 	it('Should reverse a string', () => {
 		const input = 'hello';
 		const expectedResult = 'olleh';
 		expect(reverse_string(input)).toBe(expectedResult);
 	});

	it('should reverse all letters in a string with special characters', () => {
		const input = '@"!#$%&/()=?»«@£§€{}.-;<>_,";hello  world!';
		const expectedResult = Array.from('@"!#$%&/()=?»«@£§€{}.-;<>_,";hello  world!').reverse().join('');
		expect(reverse_string(input)).toBe(expectedResult);
	});
});
