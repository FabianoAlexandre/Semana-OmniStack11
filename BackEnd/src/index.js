const express = require('express');
const cors = require('cors'); 
// Importando a routers 
// ./ referencia a mesma pasta do arquivo index.js
const routes = require('./routes');


const app =( express());
/**
 * Rota / Recurso
 * Exemplos:
 * Rota: 127.0.0.1/Users
 * Recurso: Users
 */
/**
 * Metodos HTTP:
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end 
 */
/**
 * Tipos de parametros
 * 
 * Query Params: parametros nemeados enviados na rota após "?"(Filtros, Paginação)
 *  exp: http://127.0.0.1/users&pages=2&nome=Diego&Idade=25...
 * Router Params: prametros utilizados para identificar recursos
 *  exp: app.get('/users/:id'), exp: Acessa todos os parametros informados na url
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *  exp: Converte o File Json em um Objeto JS - Criar um usuario no BD. Informar em formato Json(app.use(express.json()); 
 */
app.use(cors());
app.use(express.json());
app.use(routes);
//

/**
 * Movido para o arquivo routes.
 * 
 * app.post('/Users', (request, response) => {

    //const params = request.quiry
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack',
        aluno: 'Fabian',
    });
});

*/

app.listen(3000);