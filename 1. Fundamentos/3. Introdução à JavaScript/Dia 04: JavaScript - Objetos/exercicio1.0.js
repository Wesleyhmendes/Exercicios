let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//  console.log('Bem-vinda,', info.personagem);

info['recorrente'] = 'Sim';
// console.log(info);

for (show in info) {
    // console.log(show);
}

for (show in info) {
    // console.log(Object.values(info));
}

let info2 = {
    personagem: 'e Tio Patinhas',
    origem: 'e Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'e O último MacPatinhas',
    recorrente: 'e Sim'
  };


  

  for (show in info) {
    console.log(show + ': ' + Object.values(info[show]) + 'e ' + Object.values(info2[show]));
  }

