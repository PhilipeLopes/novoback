// Importe o módulo Express

const express = require('express');
const app = express();
const port = 3000;

// Defina uma rota para calcular o estoque médio
app.get('/', (req, res) => {
  res.send("deu erro");


 /* // Suponha que as quantidades mínima e máxima sejam fornecidas como parâmetros na URL
  const quantidadeMinima = parseFloat(req.query.min);
  const quantidadeMaxima = parseFloat(req.query.max);

  // Calcule o estoque médio
  const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2;

  // Envie a resposta como JSON
  res.json({ estoqueMedio });*/
});

// Inicie o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});