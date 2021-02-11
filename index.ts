import { recipeRouter } from './src/routes/recipe.route';
import { ingredientRouter } from './src/routes/ingredient.route';
const expressValidator = require('express-validator');
import express from "express";
import {Sequelize} from 'sequelize-typescript';
const { Ingredient } = require("./src/db-models/ingredient.model");
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use('/ingredient', ingredientRouter);
app.use('/recipe', recipeRouter);
app.use(expressValidator());

const port = process.env.PORT || 3000;


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db/recipe-store.sqlite',
  // storage: ':memory:',
  database: 'store',
  models: [__dirname + '/src/db-models']
});


auth();

async function auth() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  // await sequelize.sync({force: true});

}


app.listen(port, () => console.log(`App listening on PORT ${port}`));