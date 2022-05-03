const {stringLength, reverseString, Calculator} = require ("./index.js");

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

const calculator=new Calculator();
describe('Calculator', () => {
    describe('Sum', () => {
        test('parameters invalid parameters', () => {
            expect(() => calculator.addition('a', 'b')).toThrowError(Error);
        });

        test('parameters valid integers', () => {
            expect(calculator.addition(3, 7)).toBe(10);
        });

        test('parameters invalid integers', () => {
            expect(() => calculator.addition(102, 7)).toThrowError(Error);
        });
    });
    describe('Difference', () => {
        test('parameters invalid parameters', () => {
            expect(() => calculator.subtraction('a', 'b')).toThrowError(Error);
        });

        test('parameters valid integers', () => {
            expect(calculator.subtraction(20, 6)).toBe(14);
        });

         test('parameters invalid integers', () => {
            expect(() => calculator.subtraction(102, 7)).toThrowError(Error);
        });
    });

    describe('Division', () => {
        test('parameters invalid parameters', () => {
            expect(() => calculator.division('a', 'b')).toThrowError(Error);
        });

        test('parameters valid integers', () => {
            expect(calculator.division(9, 3)).toBe(3);
        });

         test('parameters invalid integers', () => {
            expect(() => calculator.division(102, 0)).toThrowError(Error);
        });
    });
    describe('Product', () => {
        test('parameters invalid parameters', () => {
            expect(() => calculator.multiplication('a', 'b')).toThrowError(Error);
        });

        test('parameters valid integers', () => {
            expect( calculator.multiplication(8, 9)).toBe(72);
        });

         test('parameters invalid integers', () => {
            expect(() => calculator.multiplication(102, 7)).toThrowError(Error);
        });
    });
});
