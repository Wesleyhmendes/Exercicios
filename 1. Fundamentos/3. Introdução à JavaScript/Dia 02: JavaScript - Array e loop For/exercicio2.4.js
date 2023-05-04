let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

let divisores = [2, 3, 4, 5, 6, 7, 8, 9];

let primos = [];

for (let i = 0; i <= numeros.length -1; i += 1) {

    for (let j = 0; j < divisores.length; j += 1) {
        if (numeros[i] % divisores[j] !== 0)
        primos.push(numeros[i]);
    }
}

console.log(primos);