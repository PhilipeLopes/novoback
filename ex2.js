const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

// PATH PARAMS -> :nome
const produtosRoute = require('./routers/produtos.js')
app.use(produtosRoute)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
