let l1 = 9;
let l2 = 7;
let l3 = 8;




function checkIntegerPositive (l1, l2, l3) {
    if (l1 > 0 && l2 > 0 && l3 > 0) {

         return true;

    } else {
        return false;
    }
}

function checkItsATriangle(l1, l2, l3) {
    if (l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2) {

        return true;

    } else {

        return false;
    }
}

function checkWitchTriangle(l1, l2, l3) {
    if(l1 !== l2 && l1 !== l3 && l2 !== l3) {
        return 'escaleno';

    } else if (l1 === l2 && l2 === l3 && l3 === l1){
        return 'equilátero';
    } else {
        return 'isósceles';
    }
}

console.log(checkWitchTriangle(l1, l2, l3));



function checkPerimeterTriangle(l1, l2, l3) {
    return (l1 + l2 + l3);
}

console.log(checkPerimeterTriangle(l1, l2, l3));



function infoTriangle(l1, l2, l3) {
    if (checkIntegerPositive(l1, l2, l3) === true && checkItsATriangle(l1, l2, l3) === true) {

        return checkWitchTriangle(l1, l2, l3);
    } else {
        return 'Não é um triângulo.'
    }
}

console.log('O triângulo é ', infoTriangle(l1, l2, l3) + 'e seu perímetro vale ' + checkPerimeterTriangle(l1, l2, l3) + 'cm.');