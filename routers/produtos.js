const express = require('express')
const router = express.Router()


const ListaProdutos = [
    {
        id: 1,
        nome: "arroz",
        preco: 29.90
    },
    {
        id: 2,
        nome: "feijao",
        preco: 7.97
    },
    {
        id: 3,
        nome: "cadeira gamer",
        preco: 1999.99
    },
]


//read - busca ´todos os produtos 

router.get("/produtos", (req, res) => {

    res.json(ListaProdutos)
})

// busca de produto por id 

router.get("/produtos/:id", (req, res) => {
    const id = req.params.id
    const produtoencontrado = ListaProdutos.find(produto => produto.id == id)

    res.json(produtoencontrado)

})

// create -> criar um novo produto 

router.post('/produtos ', (req, res) => {
const i = req.body.id
const ii = {
    id: ListaProduto.length + 1,
    nome: ii.nome,
    valor: ii.preco,
}
res.json(produtoencontrado)

})


const ListaProduto2 = [
    {
        id: 1,
        nome: "arroz",
        preco: 29.90
    },
]

module.exports = router