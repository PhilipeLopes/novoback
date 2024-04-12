const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

// PATH PARAMS -> :nome
const pessoas = require('./routers/rota.js')
app.use(pessoas)


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
