let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let media;

let soma = 0;

for (i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}

media = soma / numbers.length;

if (media > 20) {
    console.log("O valor da média é maior do que 20.");
} else {
    console.log("O valor da média é menor ou igual a 20.");
}