let nome = 'Bebeto';

let substituaX = nome => {
    const frase = 'Tryber x aqui!';
    frase2 =  frase.split('x');

    return `${frase2[0]} ${nome} ${frase2[1]}`
}

console.log(substituaX(nome));

let minhasSkills = substituaX => {
    const skills = ['html', 'css', 'javascript'];
    let concatenar = substituaX(nome)
    concatenar += (`. Minhas três principais habilidades são: ${skills}`);
    return concatenar;
}

console.log(minhasSkills(substituaX));