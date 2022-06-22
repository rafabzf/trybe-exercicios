const checarResultado = (meuNumero, numero) => meuNumero === numero;

const resultado = (meuNumero, callback) => {
  const numero = Math.floor((Math.random() * 5) + 1);

  return callback(meuNumero, numero) ? 'Parabéns você ganhou' : 'Tente novamente';
}
console.log(resultado(4, checarResultado));
