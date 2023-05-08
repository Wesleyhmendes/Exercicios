//a função deve retornar: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'



let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

function customerInfo(order) {
    return 'Olá, ' + order.order.delivery.deliveryPerson + ', entrega para: ' + order.name + ', Telefone:' + order.phoneNumber + ',' + order.address.street + ',' + order.address.number + ', AP:' + order.address.apartment
}

customerInfo(order);

// console.log(customerInfo(order));


order.name = 'Luiz Silva';
order['payment'] = 50;

function orderModifier(order) {
    return 'Olá, ' + order.name + ', o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$' + order.payment + ',00.';
  }

orderModifier(order);
console.log(orderModifier(order));