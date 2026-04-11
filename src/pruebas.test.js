import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} from './index.js';

test('capitalizar', () => {
    expect(capitalize('hola')).toBe('H');
});

test('alreves', () => {
    expect(reverseString('arbol')).toBe('lobra');
});

test('calculadora', () => {
    expect(calculator(2, 1, '+')).toBe(3);
    expect(calculator(5, 1, '-')).toBe(4);
    expect(calculator(1, 1, '*')).toBe(1);
    expect(calculator(6, 1, '/')).toBe(6);
});

test('caesarCipher', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLLo', 3)).toBe('KhOOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('analyzeArray', () => {
    const input = [1, 8, 3, 4, 2, 6];
    const expectedValue = { average: 4, min: 1, max: 8, length: 6 };
    expect(analyzeArray(input)).toEqual(expectedValue);
});
