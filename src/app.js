const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

app.use(express.json());

// conecta banco
connectDB();

const routes = require('./routes');
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log('Servidor rodando na porta ' + process.env.PORT);
});