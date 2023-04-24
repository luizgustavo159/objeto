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
let valorTotal = 0;
for(let produto of produtosConsumidos){
    valorTotal += produto.precoUnit * produto.quantidade;
}
console.log(`Sr(a) ${cartao.nome}, o total a pagar é R$${(valorTotal/100).toFixed(2)}`);