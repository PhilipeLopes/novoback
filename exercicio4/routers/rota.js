const express = require('express')
const router = express.Router()


let pessoas = [
    {
        "id": 1,
        "nome": "Lucas",
        "idade": 32,
        "email": "lucas@email.com",
        "telefone": "61900020001"
    },
    {
        "id": 2,
        "nome": "Fernanda",
        "idade": 27,
        "email": "fernanda@email.com",
        "telefone": "61900020002"
    },
    {
        "id": 3,
        "nome": "Ricardo",
        "idade": 36,
        "email": "ricardo@email.com",
        "telefone": "61900020003"
    },
    {
        "id": 4,
        "nome": "Patricia",
        "idade": 40,
        "email": "patricia@email.com",
        "telefone": "61900020004"
    },
    {
        "id": 5,
        "nome": "Bruno",
        "idade": 29,
        "email": "bruno@email.com",
        "telefone": "61900020005"
    }
]

router.get('/', (req, res) => {
    res.send("ok");
});


router.get('/pessoas', (req, res) => {
    res.json(pessoas);
});


router.post('/pessoas', (req, res) => {
    const pessoa = req.body;
    pessoa.id = pessoas.length + 1;
    pessoas.push(pessoa);
    res.status(201).json(pessoa);
});

router.get('/pessoas/:id', (req, res) => {
    const { id } = req.params;
    const pessoa = pessoas.find(p => p.id == id);
    if (!pessoa) return res.status(404).json({ error: 'Pessoa não encontrada' });
    res.json(pessoa);
});

router.put('/pessoas/:id', (req, res) => {
    const { id } = req.params;
    const index = pessoas.findIndex(p => p.id == id);
    if (index === -1) return res.status(404).json({ error: 'Pessoa não encontrada' });
    pessoas[index] = { ...pessoas[index], ...req.body };
    res.json(pessoas[index]);
});

router.delete('/pessoas/:id', (req, res) => {
    const { id } = req.params;
    const index = pessoas.findIndex(p => p.id == id);
    if (index === -1) return res.status(404).json({ error: 'Pessoa não encontrada' });
    pessoas.splice(index, 1);
    res.status(204).end();
});



module.exports = router