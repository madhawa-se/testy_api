import { ingredientRouter } from './ingredient.route';
import express, { NextFunction, Request, Response } from 'express';
import Recipe from '../db-models/recipes.model';
import RecipeWithIngredients from '../db-models/recipe_with_ingredients..model';
import Ingredient from '../db-models/ingredient.model';
import { CreateRecipeDto } from '../dto/createRecipe.dto';
import { RecipeService } from '../services/recipe.service';
const { body, validationResult } = require('express-validator');

export const recipeRouter = express.Router({
    strict: true
});

recipeRouter.post('/', [
    body('name').notEmpty(),
], async (req: Request, res: Response, next: NextFunction) => {

    // create new recipe
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        await RecipeService.createRecipe(req.body);
        res.json({ status: 'success' });
    } catch (e) {
        console.log(e);
        next(e);
    }

});

recipeRouter.get('/', async (req: Request, res: Response, next) => {
    // get all recipes
    try {
        const recipes = await RecipeService.getAll();
        res.json(recipes);
    } catch (e) {
        next(e);
    }
});

recipeRouter.get('/:id', async (req: Request, res: Response, next) => {
    // get a recipe
    try {
        const receipId = Number(req.params['id']);
        const receipes = await RecipeService.getOne(receipId);
        res.json(receipes);
    } catch (e) {
        next(e);
    }
});


recipeRouter.put('/:id', async (req: Request, res: Response, next) => {
    // delete a recipe
    const ingredientID = req.params['id'];
    try {
        const receipId = Number(req.params['id']);
        await RecipeService.update(receipId, req.body);
        res.json({ status: 'success' });
    } catch (e) {
        return res.status(400).json({ error: e.toString() });
    }
});


recipeRouter.delete('/:id', async (req: Request, res: Response, next) => {
    const ingredientID = req.params['id'];
    try {
        const receipId = Number(req.params['id']);
        await RecipeService.delete(receipId);
        res.json({ status: 'success' });
    } catch (e) {
        return res.status(400).json({ error: e.toString() });
    }
});


export default recipeRouter;
