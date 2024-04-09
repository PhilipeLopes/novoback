const prompt = require('prompt-sync')();

// 1 )
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let nota4 = parseFloat(prompt("Digite a quarta nota:"));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7.0) {
    console.log(`Média: ${media} - Aprovado!`);
} else {
    console.log(`Média: ${media} - Reprovado!`);
}

// 2 )

let totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
let votosBrancos = parseInt(prompt("Digite o número de votos brancos:"));
let votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
let votosValidos = parseInt(prompt("Digite o número de votos válidos:"));

let percentualBrancos = (votosBrancos / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualValidos = (votosValidos / totalEleitores) * 100;

console.log(`Percentual de votos brancos: ${percentualBrancos}%`);
console.log(`Percentual de votos nulos: ${percentualNulos}%`);
console.log(`Percentual de votos válidos: ${percentualValidos}%`);

// 3 )

let salarioAtual = parseFloat(prompt("Digite o salário mensal atual:"));
let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste :"));

let novoSalario = salarioAtual * (1 + percentualReajuste);

console.log(`Novo salário: R$ ${novoSalario}`);

// 4 )


let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));


let percentualDistribuidor = 0.28;
let percentualImpostos = 0.45;

let custoDistribuidor = custoFabrica * percentualDistribuidor;
let custoImpostos = custoFabrica * percentualImpostos;

let custoConsumidor = custoFabrica + custoDistribuidor + custoImpostos;

console.log(`Custo final ao consumidor: R$ ${custoConsumidor}`);

// 5 )
// pra zerar as let's 
custoFabrica = 0;
custoConsumidor = 0;
percentualDistribuidor = 0;
custoDistribuidor = 0;
custoImpostos = 0;

custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));

percentualDistribuidor = parseFloat(prompt("Digite o percentual do distribuidor :"));

percentualImpostos = parseFloat(prompt("Digite o percentual de impostos  :"));

custoDistribuidor = custoFabrica * percentualDistribuidor;
custoImpostos = custoFabrica * percentualImpostos;

custoConsumidor = custoFabrica + custoDistribuidor + custoImpostos;

console.log(`Custo final ao consumidor: R$ ${custoConsumidor}`);

// 6 )

let numeroCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos:"));
let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas:"));
let salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor:"));
let valorPorCarroVendido = parseFloat(prompt("Digite o valor por carro vendido:"));

let comissao = 0.05 * valorTotalVendas;

let salarioFinal = salarioFixo + (numeroCarrosVendidos * valorPorCarroVendido) + comissao;

console.log(`Salário final do vendedor: R$ ${salarioFinal}`);

// 7 )

let nota11 = parseFloat(prompt("Digite a primeira nota:"));
let nota22 = parseFloat(prompt("Digite a segunda nota:"));

let pesoNota1 = 4;
let pesoNota2 = 6;
let mediaPonderada = (nota11 * pesoNota1 + nota22 * pesoNota2) / (pesoNota1 + pesoNota2);

console.log(`Média final do aluno: ${mediaPonderada}`);


// 8 ) 

let raio = parseFloat(prompt("Digite o raio da caixa d'água:"));
let altura = parseFloat(prompt("Digite a altura da caixa d'água:"));
const PI = 3.14;
let volume = PI * (raio ** 2) * altura;

console.log(`Volume da caixa d'água: ${volume} unidades cúbicas`);


// 9 )

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let soma = numero1 + numero2;
let multiplicacao = soma * numero1;


console.log(`Soma: ${soma}`);
console.log(`Multiplicação pelo primeiro número: ${multiplicacao}`);