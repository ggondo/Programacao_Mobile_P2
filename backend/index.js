const express = require('express')
const app = express()
//middleware
app.use(express.json())

//const OPENAI_API_KEY = process.env.OPENAI_API_KEY

const { OPENAI_API_KEY } = process.env

app.get('/hello', (req, res) =>{
    res.json({mensagem: "Hello direto do Back end"})
})

const porta = 4000 || 4000

app.listen(4000, () => console.log (`Servidor ok. Porta ${porta}`))