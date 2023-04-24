const pessoa = {
    nome: "Gustavo",
    idade: 23,
    altura: 1.77, 
    temCNH: true,
    apelidos: ["Tavinho", ]
};
let textoCNH = pessoa.temCNH ? "possui CNH" : "Nao possui CNH";
let i = 0;

for(let apelido of pessoa.apelidos){
i ++;
}
if(i === 1){
console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}M, ${textoCNH} e tem o seguinte apelido: ${pessoa.apelidos}`);
}
else{
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}M, ${textoCNH} e tem os seguintes apelidos:`);
    for(let apelido of pessoa.apelidos){
        console.log(`- ${apelido}`)
    }
}