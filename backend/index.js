const express = require('express');

const app = express();
app.get('/', (request, response) => {
  return response.json({
    evento: "Semana de Estudo",
    aluno: "Reginaldo Sattler"
  });
});
app.listen(3333);