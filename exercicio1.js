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
let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (em decimal):"));

let novoSalario = salarioAtual * (1 + percentualReajuste);

console.log(`Novo salário: R$ ${novoSalario}`);

// 4 )

