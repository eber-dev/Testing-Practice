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

export function calculator(num1, num2, operator) {
    let resultado;
    switch (operator) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            alert('Operador incorrecto');
    }
    return resultado;
}

export function caesarCipher(cadena, desplazamiento) {
    let resultado = '';

    for (let i = 0; i < cadena.length; i++) {
        let letra = cadena[i];

        // Convertir letra → número
        let codigo = letra.charCodeAt(0);

        // MAYÚSCULAS
        if (codigo >= 65 && codigo <= 90) {
            let nuevaLetra = String.fromCharCode(
                ((((codigo - 65 + desplazamiento) % 26) + 26) % 26) + 65,
            );
            resultado += nuevaLetra;

            // minúsculas
        } else if (codigo >= 97 && codigo <= 122) {
            let nuevaLetra = String.fromCharCode(
                ((((codigo - 97 + desplazamiento) % 26) + 26) % 26) + 97,
            );
            resultado += nuevaLetra;

            // otros caracteres (espacios, símbolos)
        } else {
            resultado += letra;
        }
    }

    return resultado;
}

export function analyzeArray(array) {
    function average(array) {
        let acumulado = 0;
        for (let i = 0; i < array.length; i++) {
            acumulado += array[i];
        }

        return acumulado / array.length;
    }

    function min(array) {
        let menor = array[0];

        for (let i = 0; i < array.length; i++) {
            if (menor > array[i]) {
                menor = array[i];
            }
        }

        return menor;
    }

    function max(array) {
        let mayor = array[0];

        for (let i = 0; i < array.length; i++) {
            if (mayor < array[i]) {
                mayor = array[i];
            }
        }
        return mayor;
    }

    return {
        average: average(array),
        min: min(array),
        max: max(array),
        length: array.length,
    };
}
