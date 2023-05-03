let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    }
    
}

let menor = maior;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < maior && numbers[i] < menor) {
        menor = numbers[i];
    }
}

console.log("O menor número é:", menor);
