const {stringLength, reverseString} = require ("./index.js");

test('String with valid length', () => {
    expect(stringLength('One string')).toBe(10);
});
test('String empty', () => {
    expect(() => stringLength('')).toThrow(Error);
});
test('String with invalid length', () => {
    expect(() => stringLength('One string to test')).toThrow(Error);
});

test('Second string reversed', () => {
    expect(reverseString('Second string reversed')).toBe('desrever gnirts dnoceS');
});
