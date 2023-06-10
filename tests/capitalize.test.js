const {capitalize} = require('../src/capitalize');

describe('capitalize', () => {
  test('should only capitalize the first letter of a string', () => {
    const result = capitalize('hello, World!');
    expect(result).toEqual('Hello, World!');
  });
  test('should handle strings with spaces and punctuation', () => {
    const result = capitalize('a man, a plan, a canal, Panama!');
    expect(result).not.toEqual('A Man, A Plan, A Canal, Panama!');
  });
  test('should handle strings with mixed case letters', () => {
    const result = capitalize('mi amigo es un perro inteligente!');
    expect(result).not.toEqual('Mi Amigo Es Un Perro Inteligente!');
  });
  test('should handle strings with special characters', () => {
    const result = capitalize('le très bon ami!');
    expect(result).toEqual('Le très bon ami!');
  });
  test('should handle strings with numbers and symbols', () => {
    const result = capitalize('$5.25');
    expect(result).toEqual('$5.25');
  });
});
