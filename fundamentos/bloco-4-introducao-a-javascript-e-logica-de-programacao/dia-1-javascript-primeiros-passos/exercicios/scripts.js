//Exercicio 1

const a = 10;
const b = 20;

console.log(a + b);
console.log(a -b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Exercicio 2

const number1 = 40;
const number2 = 30;

if (number1 > number2) {
    console.log(number1);
} else {
    console.log(number2);
}

//Exercicio 3 

const x = 50;
const y = 60;
const z = 70;

if (x > y && x > z) {
    console.log("'x' é o maior");
} else if (y > z && y > x) {
    console.log("'y' é o maior");
} else {
    console.log("'z' é o maior");
}

//Exercicio 4

const numero = 45;

if (numero > 0) {
    console.log("positive");
} else if (numero < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

//Exercicio 5

let angulo1 = 100;
let angulo2 = 50;
let angulo3 = 30;

let somaDosAngulos = angulo1 + angulo2 + angulo3;

let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosPositivos) {
if (somaDosAngulos === 180) {
    console.log(true);
} else {
    console.log(false);
};
} else {
    console.log("Foi encontrado um erro: Ângulo inválido");
}

//Exercicio 6

let peca = "cavalo";

switch (peca.toLowerCase()) {
    case "rei":
    console.log("Rei-> Uma casa apenas para qualquer direção.");
    break;
    case "bispo":
    console.log("Bispo-> Diagonal.");
    break;
    case "rainha":
    console.log("Rainha-> Diagonal, horizontal e vertical.");
    break;
    case "cavalo":
    console.log("Cavalo -> 'L' pode pular sobre as peças.");
    break;
    case "torre":
    console.log("Torre -> Horizontal e vertical.");
    break;
    case "peão":
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
    default:
    console.log("Erro, peça inválida!");
    break;
};

//Exercicio 7


const porcentagem = 46;

if (porcentagem < 0 || porcentagem > 100) {
  console.log("Erro, nota incorreta!");
} else if (porcentagem >= 90) {
  console.log("A");
} else if (porcentagem >= 80) {
  console.log("B");
} else if (porcentagem >= 70) {
  console.log("C");
} else if (porcentagem >= 60) {
  console.log("D");
} else if (porcentagem >= 50) {
  console.log("E");
} else {
  console.log("F");
}

//Exercicio 8

const n1 = 82;
const n2 = 86;
const n3 = 88;

let par = false;

if ((n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0)) {
    par = true;
};
console.log(par);
