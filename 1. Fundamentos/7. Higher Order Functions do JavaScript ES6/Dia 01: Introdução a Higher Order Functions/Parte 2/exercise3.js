const expectedResult = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  
  const getNamedBook = () => {
    // escreva seu código aqui
  }

  function lovefunc(flower1, flower2) {
    const array = [flower1, flower2];
    let apaixonado = array.every((flor) => flor % 2 === 0)
    if(apaixonado) return false;
    return true;
  };

  console.log(lovefunc(1, 4));