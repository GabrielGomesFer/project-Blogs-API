const express = require('express');
const userLogin = require('./controller/userLoginController');
const userValidation = require('./middlewares/userValidation');
const UserController = require('./controller/UserController');
const userCreationValidation = require('./middlewares/userCriationValidation');
const tokenValidation = require('./middlewares/tokenValidation');
const nameValidation = require('./middlewares/categoryCreationValidation');
const categoriesController = require('./controller/CategoriesController');
const postsController = require('./controller/PostsController');
// ...

const app = express();

app.use(express.json());

app.post('/login', userValidation, userLogin);
// ...
app.post('/user',
userCreationValidation.validateCriation,
userCreationValidation.onlyEmailVerify,
UserController.createUser);
app.get('/user', tokenValidation, UserController.getAllUsers);
app.get('/user/:id', tokenValidation, UserController.getUserById);

app.post('/categories', tokenValidation, nameValidation, categoriesController.createCategories);
app.get('/categories', tokenValidation, categoriesController.getAllCategories);

app.get('/post', tokenValidation, postsController);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
