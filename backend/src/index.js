const express = require('express');
const cors = require('cors');
const routes = require('./routes');


/**
 * Tipos de Parametros
 * Query Params: Parâmetros nomeados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Parâmetros da requisição, utilizados para criar ou alterar recursos
 */

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);