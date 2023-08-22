const contas = require('/contas');

test("Soma 2+5 esoerado 7 como resultado.", () => {
    expect(contas.soma(2,5)).toBe(7)
}) 