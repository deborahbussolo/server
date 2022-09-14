import express from 'express' //importando o express

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        {id: 1, name: 'Anuncio 1'},
        {id: 2, name: 'Anuncio 2'},
        {id: 3, name: 'Anuncio 3'}
    ])
}) // é onde o usuario vai parar quando o caminho for /ads

app.listen(3333)