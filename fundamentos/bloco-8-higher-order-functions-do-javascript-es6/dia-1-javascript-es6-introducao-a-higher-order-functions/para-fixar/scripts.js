const acordar = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (func) => {
    const resultado = func();
    console.log(resultado);
};

doingThings(acordar);
doingThings(cafe);
doingThings(dormir);