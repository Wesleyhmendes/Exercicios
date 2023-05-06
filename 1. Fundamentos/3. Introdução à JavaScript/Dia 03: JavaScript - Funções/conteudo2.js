let clientesTrybeBank = ['Ada', 'John', 'Gus'];
let clientes = [];

function adicionar(clientesTrybeBank) {
    for (i = 0; i < clientesTrybeBank.length; i += 1) {

        if (typeof clientesTrybeBank[i] === 'string') {

            clientes.push(clientesTrybeBank[i]);
        }
    }
}


adicionar(clientesTrybeBank);
console.log(clientes);