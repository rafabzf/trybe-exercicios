document.getElementById("page-title").innerText = "Harry Potter";
document.getElementById("second-paragraph").innerText = "Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de Hogwarts.";
document.getElementById("subtitle").innerText = "Melhor saga de filmes já feita!";

const paragrafos = document.getElementsByClassName('paragrafos');

paragrafos[0].style.color = 'orange';
paragrafos[0].style.backgroundColor = 'gray';

const subtitle = document.getElementsByTagName('h4')[0];
subtitle.style.color = 'red';
