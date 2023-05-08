let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


function turno2 (objeto, chave, valorChave) {
    objeto[chave] = valorChave;
}

turno2(lesson2, 'turno', 'noite');

// console.log(lesson2);

function chaves(objeto) {
    return Object.keys(objeto);
}

chaves(lesson1);
// console.log(chaves(lesson1));


let valores = Object.keys(lesson1);

function tamanho(objeto) {
    return valores.length;
}

// tamanho(lesson1);
// console.log(tamanho(lesson1));



function valoresObjeto (objeto) {
    return Object.values(objeto);
}

// console.log(valoresObjeto(lesson1));


let allLessons = {};

Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});

// console.log(allLessons);



let contador = 0;

function estudantes(objeto) {

    contador += objeto.numeroEstudantes;
}

estudantes(allLessons.lesson1)
// console.log(contador);


function getValueByNumber(objeto, posicao) {
    return Object.values (objeto)[posicao];
}

// console.log(getValueByNumber(lesson1, 0));

function verifyPair(objeto, chave, valor) {
    if (objeto.chave.valor !== undefined) {
        return true;
    } else {
        return false;
    }
}

console.log(verifyPair(lesson1, 'matéria', 'Maria Clara'));