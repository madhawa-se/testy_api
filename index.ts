import { recipeRouter } from './src/routes/recipe.route';
import { ingredientRouter } from './src/routes/ingredient.route';
import express from "express";
import {Sequelize} from 'sequelize-typescript';
import * as bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// add routing
app.use('/ingredient', ingredientRouter);
app.use('/recipe', recipeRouter);

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

welcome();
app.listen(port, () => console.log(`API listening on PORT ${port}`));


function welcome(){
  console.log(`
             
  
████████╗░█████╗░░██████╗████████╗██╗░░░██╗  ██████╗░███████╗░█████╗░██╗██████╗░███████╗
╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝╚██╗░██╔╝  ██╔══██╗██╔════╝██╔══██╗██║██╔══██╗██╔════╝
░░░██║░░░███████║╚█████╗░░░░██║░░░░╚████╔╝░  ██████╔╝█████╗░░██║░░╚═╝██║██████╔╝█████╗░░
░░░██║░░░██╔══██║░╚═══██╗░░░██║░░░░░╚██╔╝░░  ██╔══██╗██╔══╝░░██║░░██╗██║██╔═══╝░██╔══╝░░
░░░██║░░░██║░░██║██████╔╝░░░██║░░░░░░██║░░░  ██║░░██║███████╗╚█████╔╝██║██║░░░░░███████╗
░░░╚═╝░░░╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░░░░╚═╝░░░  ╚═╝░░╚═╝╚══════╝░╚════╝░╚═╝╚═╝░░░░░╚══════╝

  Testy Recipes API v - 1.5                                              

  `);
}