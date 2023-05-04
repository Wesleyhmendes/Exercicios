let primos = [];
let maiorNum = 0;


for (let i = 2; i <= 50; i += 1) {
  let numPrimo = true;
  
  for (let j = 2; j < i; j += 1) {
    
    if (i % j === 0) {
      numPrimo = false;
      break;
    }
  }
  
  if (numPrimo) {
    maiorNum = i;
    
  }
}

console.log(maiorNum);