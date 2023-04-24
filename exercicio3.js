const produtosConsumidos = [
    {nome: "Coca", precoUnit: 800, quantidade: 1},
    {nome: "Cerveja", precoUnit: 1000, quantidade: 5},
    {nome: "agua", precoUnit: 700,  quantidade: 1}
]
const cartao = {
    nome: "Gustavo",
    idade: 23,
    produtosConsumidos
};
console.log(cartao.nome);
console.log(cartao.idade);
cartao.idade = 25;
console.log(cartao.idade);
console.log(cartao.produtosConsumidos[0].nome);
console.log(cartao.produtosConsumidos[produtosConsumidos.length - 1].precoUnit);