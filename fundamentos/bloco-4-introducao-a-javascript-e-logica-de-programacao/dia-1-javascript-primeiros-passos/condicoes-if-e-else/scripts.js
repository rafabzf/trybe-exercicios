//Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;

const notaCandidata = 70;

//Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:

if (notaCandidata >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
} else if (notaCandidata < 80 && notaCandidata >= 60) {
    console.log("Você está na nossa lista de espera");
} else if (notaCandidata < 60) {
    console.log("Você foi reprovada(o)");
}