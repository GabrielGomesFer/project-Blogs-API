const express = require('express');
const Login = require('./controller/userLoginController');
const userValidation = require('./middlewares/userValidation');
// ...

const app = express();

app.use(express.json());

app.post('/login', userValidation, Login);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
