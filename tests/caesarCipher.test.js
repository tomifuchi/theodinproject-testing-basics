const {caesarCipher} = require('../src/caesarCipher');

describe('Caesar Cipher', () => {
	const error_msg = 'Not of type string';


	it('should apply a simple shift of 1', () => {
		const plaintext = 'hello world';
		const ciphertext = caesarCipher(plaintext, 1);
		expect(ciphertext).toEqual('ifmmp xpsme');
	});

	it('should apply a simple shift of 10', () => {
		const plaintext = 'hello world';
		const ciphertext = caesarCipher(plaintext, 10);
		expect(ciphertext).toEqual('rovvy gybvn');
	});
	it('should apply a simple shift of 15', () => {
		const plaintext = 'hello world';
		const ciphertext = caesarCipher(plaintext, 15);
		expect(ciphertext).toEqual('wtaad ldgas');
	});
	it('should apply no shift', () => {
		const plaintext = 'hello world';
		const ciphertext = caesarCipher(plaintext, 0);
		expect(ciphertext).toEqual('hello world');
	});

	it('should apply a simple shift of -1', () => {
		const plaintext = 'hello world';
		const ciphertext = caesarCipher(plaintext, -1);
		expect(ciphertext).toEqual('gdkkn vnqkc');
	});

	it('should apply a simple shift of 7 to a random paragraph of text with punctuations', () => {
		const plaintext = 'This is a randomly generated paragraph containing CAPITAL LETTERS, lowercase letters, numbers123456789, and special characters.@"|!#$%&/()=?»«@£§€{}.-;<>_,";';
		const result = 'Aopz pz h yhukvtsf nlulyhalk whyhnyhwo jvuahpupun JHWPAHS SLAALYZ, svdlyjhzl slaalyz, ubtilyz123456789, huk zwljphs johyhjalyz.@"|!#$%&/()=?»«@£§€{}.-;<>_,";';
		const ciphertext = caesarCipher(plaintext, 7);
		expect(ciphertext).toEqual(result);
	});

	it('should correctly handle null and undefined input values', () => {
		expect(() => caesarCipher(null, 1)).toThrow(error_msg);
		expect(() => caesarCipher(undefined, 1)).toThrow(error_msg);
	});

	it('should apply no  shift to an empty string', () => {
		const plaintext = '';
		const ciphertext = caesarCipher(plaintext, 0);
		expect(ciphertext).toEqual('');
	});

	it('should only handle string and not arrays as input', () => {
		expect(() => caesarCipher([1, 2, 3], 0)).toThrow(error_msg);
	});

	it('should only handle string and not objects as input', () => {
		expect(() => caesarCipher({ '0': 1, '1': 2, '2': 3 })).toThrow(error_msg);
	});
});
