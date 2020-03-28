const express = require('express');

//Importando os controllers
const OngController = require('./controllers/OngController');
const incidentsController = require('./controllers/incidentsController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

//const connection = require('./database/connection');

const routes = express.Router();

routes.post('/session', sessionController.create);

//Encapsulando metodo Ongs de listagem e inserção
routes.get('/ongs', OngController.index); 
routes.post('/ongs', OngController.create);

routes.get('/profile', profileController.index);

//Encapsulando metodo Casos de listagem e inserção

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

//Exportando variavel do arquivo.
module.exports = routes;
