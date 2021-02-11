import Ingredient from './../db-models/ingredient.model';
import express, { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { IngredientService } from '../services/ingredient.service';

export const ingredientRouter = express.Router({
    strict: true
});


ingredientRouter.post('/', [
    body('name').notEmpty(),
], async (req: Request, res: Response, next: NextFunction) => {

    // create a new ingredient
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name } = req.body;
        await IngredientService.createIngredient(name);
        res.json({ status: 'success' });
    } catch (e) {
        console.log(e);
        next(e);
    }

});

ingredientRouter.get('/', async (req: Request, res: Response, next) => {
    // get all ingredients
    try {
        const recipes = await IngredientService.getAll();
        res.json(recipes);
    } catch (e) {
        next(e);
    }
});

ingredientRouter.get('/:id', async (req: Request, res: Response, next) => {
    // get a ingredient
    try {
        const receipId = Number(req.params['id']);
        const receipes = await IngredientService.getOne(receipId);
        res.json(receipes);
    } catch (e) {
        next(e);
    }
});


ingredientRouter.put('/:id', async (req: Request, res: Response, next) => {
    // update a ingredient
    const ingredientID = Number(req.params['id']);
    try {
        const { name } = req.body;
        await IngredientService.update(ingredientID, name);
        res.json({ status: 'success' });
    } catch (e) {
        next(e);
    }
});

ingredientRouter.delete('/:id', async (req: Request, res: Response, next) => {
    // delete a ingredient
    const ingredientID = req.params['id'];
    try {
        const receipId = Number(req.params['id']);
        await IngredientService.delete(receipId);
        res.json({ status: 'success' });
    } catch (e) {
        next(e);
    }
});


export default ingredientRouter;
