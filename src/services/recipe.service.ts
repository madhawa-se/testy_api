import { Request, Response } from 'express';
import Recipe from '../db-models/recipes.model';
import RecipeWithIngredients from '../db-models/recipe_with_ingredients..model';
import { CreateRecipeDto } from '../dto/createRecipe.dto';
import { EditRecipeDto } from '../dto/editRecipe.dto';

export class _RecipeService {

    public getAll() {
        return Recipe.scope('ingredient').findAll();
    }

    public getOne(recipeId: number) {
        return Recipe.scope('ingredient').findByPk(recipeId);
    }

    public async createRecipe(createRecipeData: CreateRecipeDto): Promise<void> {

        // create new recipe with exsisting ingredients
        const { name, ingredients } = createRecipeData;
        const result = await Recipe.create({
            name: name
        });

        const recipeId = result.recipeId;
        const recipeIngredients = ingredients.map(ingrediantData => {
            return {
                recipeId: recipeId,
                ingredientId: ingrediantData.ingredientId,
                amount: ingrediantData.amount
            };
        });

        RecipeWithIngredients.bulkCreate(recipeIngredients);
    }

    async update(recipeId: number, editRecipeDto: EditRecipeDto) {
        const { name, ingredients } = editRecipeDto;
        const result = await Recipe.update({
            name: name
        }, { where: { recipeId: recipeId } });


        await RecipeWithIngredients.destroy({
            where: {
                recipeId: recipeId
            }
        });

        // add new entries
        const recipeIngredients = ingredients.map(ingrediantData => {
            return {
                recipeId: recipeId,
                ingredientId: ingrediantData.ingredientId,
                amount: ingrediantData.amount
            };
        });

        return RecipeWithIngredients.bulkCreate(recipeIngredients);
    }

    async delete(recipeId: number) {

        await Recipe.destroy({
            where: {
                recipeId: recipeId
            }
        });
    }
}

const RecipeService = new _RecipeService();
export { RecipeService };
