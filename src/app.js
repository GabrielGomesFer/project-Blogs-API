const express = require('express');
const userLogin = require('./controller/userLoginController');
const userValidation = require('./middlewares/userValidation');
const createUser = require('./controller/UserCreateController');
const userCreationValidation = require('./middlewares/userCriationValidation');
// ...

const app = express();

app.use(express.json());

app.post('/login', userValidation, userLogin);
// ...
app.post('/user', userCreationValidation, createUser);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
