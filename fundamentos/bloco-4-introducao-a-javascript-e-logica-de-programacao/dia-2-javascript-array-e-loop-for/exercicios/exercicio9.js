let numeros = [];

for (index = 1; index <= 25; index += 1) {
    numeros.push(index);
}

console.log(numeros);

for (let index = 0; index < numeros.length; index += 1) {
    console.log(numeros[index] / 2);
}