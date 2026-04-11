export function capitalize(string) {
    let capital = string.charAt(0).toUpperCase();
    return capital;
}

export function reverseString(string) {
    let arreglo1 = [];

    for (let i = 0; i < string.length; i++) {
        arreglo1[string.length - 1 - i] = string[i];
    }

    let final = arreglo1.join('');
    return final;
}

export function calculator() {}

export function caesarCipher() {}

export function analyzeArray() {}
