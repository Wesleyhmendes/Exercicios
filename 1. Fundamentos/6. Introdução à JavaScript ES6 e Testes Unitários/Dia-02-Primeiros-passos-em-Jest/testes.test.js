const removeItem = require('./exercicio1');
const myFizzBuzz = require('./myFizzBuzz');

describe('A função removeItem()', () => {
    it('recebe um array e retorna uma cópia sem o elemento item, caso ele exista', () => {
        expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })

    it('Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })

    it('Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})

describe('A função myFizzBuzz(num) recebe um número num como parâmetro', () => {
    
    it('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })

    it('Caso num seja um número divisível apenas por 3, a função retorna "fizz".', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    })

    it('Caso num seja um número divisível apenas por 5, a função retorna "buzz"', () => {
        expect(myFizzBuzz(25)).toBe('buzz');
    })

    it('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num', () => {
        expect(myFizzBuzz(7)).toBe(7);
    })

    it('Caso num não seja um número, a função retorna false', () => {
        expect(myFizzBuzz(String)).toBe(false);
    })
})