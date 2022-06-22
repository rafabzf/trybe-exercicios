const newEmployees = (employeeFunction) => {
    const employees = {
      id1: employeeFunction('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: employeeFunction('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: employeeFunction('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

const employeeFunction = (name) => {
    const email = name.toLowerCase().split(' ').join('_');
    return {name, email: `${email}@betrybe.com`};
}

console.log(newEmployees(employeeFunction));