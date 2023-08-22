const contas = require('./contas');

test("Soma 2+5 esperado 7 como resultado.", () => {
    expect(contas.soma(2,5)).toBe(7)
})

test("Multiplicação 10*10 esperado 100 como resultado", () => {
    expect(contas.multiplicacao(10,10)).toBe(100)
})

test("Divisão 50/2 esperado 25 como resultado", () => {
    expect(contas.divisao(50,2)).toBe(25)
})

test("Subtração 100-2 esperado 50 como resultado", () => {
    expect(contas.subtracao(100,2)).toBe(98)
})

// COMENTANDO 