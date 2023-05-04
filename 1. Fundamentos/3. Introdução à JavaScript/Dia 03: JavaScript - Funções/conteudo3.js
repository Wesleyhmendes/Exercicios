let clientesTrybeBank = ['Ada', 'John', 'Gus', 'Ada', 'João'];
let novaLista = [];

function adicionar(clientesTrybeBank) {
    for (i = 0; i < clientesTrybeBank.length; i += 1) {
        let repetido = false;

        for (j = 0; j < clientesTrybeBank.length; j += 1) {
            if (clientesTrybeBank[i] === clientesTrybeBank[j]) {
                repetido = true;
            }
        }
        if (repetido === false) {
            novaLista.push(clientesTrybeBank[i]);
        }
    }
}


adicionar(clientesTrybeBank);
console.log(novaLista);