let maiorNumeroPrimo = 0;

for (let number = 0; number <= 50; number += 1) {
  let ePrimo = true;
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      ePrimo = false;
    }
  }
  if (ePrimo) {
    maiorNumeroPrimo = number;
  }
}

console.log(maiorNumeroPrimo);