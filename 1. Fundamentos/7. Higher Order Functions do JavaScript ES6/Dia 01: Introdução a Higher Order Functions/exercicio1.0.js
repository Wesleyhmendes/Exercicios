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
// console.log(newEmployees(emailEmployee));

// Sorteador de loteria //

const lotery = (numApostado, callback ) => {
    const randomNumber = Math.floor(Math.random() * (1 - 5) + 5);
    return numApostado.find((numApostado) => numApostado === randomNumber);
};
// console.log(lotery(4));

// Corretor automático de exame //
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corretor = (answers, studentAnswers) => {
    let pontos = 0;
    studentAnswers.forEach((answer, index) => {
        if(answer === 'N.A') {
            return;
        }
        if(answer === answers[index]) {
            pontos += 1;
        } else {
            pontos -= 1;
        }
    });
    return pontos;
};

// console.log(corretor(RIGHT_ANSWERS, STUDENT_ANSWERS));


