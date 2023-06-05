//Exercício 1 //
const emailEmployee = (fullName) => {
    return `${fullName}@trybe.com`;
};
const newEmployees = (emailEmployee) => {
    const employees = {
      id1: emailEmployee('Pedro Guerra').toLowerCase().replace(' ', '_'),
      id2: emailEmployee('Luiza Drumond').toLowerCase().replace(' ', '_'),
      id3: emailEmployee('Carla Paiva').toLowerCase().replace(' ', '_'),
    }
    return employees;
  };
console.log(newEmployees(emailEmployee));

//Exercício 2 //
