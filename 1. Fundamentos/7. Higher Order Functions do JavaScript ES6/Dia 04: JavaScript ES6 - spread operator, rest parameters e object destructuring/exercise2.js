// criar função sum
// ilimitados parâmetros
// retorna a soma dos parâmetros
// chamada da função: sum(4, 5, 6) retornará 15

const sum = (...numbers) => numbers.reduce((acc, crr) => acc += crr, 0);
console.log(sum(4, 5, 6));