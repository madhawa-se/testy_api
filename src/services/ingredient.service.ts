import Ingredient from '../db-models/ingredient.model';

export class _IngredientService {

    public getAll() {
        // create all ingredients
        return Ingredient.scope().findAll();
    }

    public getOne(ingredientId: number) {
        // get a  ingredient
        return Ingredient.scope().findByPk(ingredientId);
    }

    public async createIngredient(name: string) {

        // create new ingredients
        return Ingredient.create({
            name: name
        });
    }

    async update(ingredientId: number, name: string) {
        // Update a ingredient
        return Ingredient.update({
            name: name
        }, { where: { ingredientId: ingredientId } });
    }


    async delete(ingredientId: number) {
        // Delete a ingredient
        return Ingredient.destroy({
            where: {
                ingredientId: ingredientId
            }
        });
    }
}

const IngredientService = new _IngredientService();
export { IngredientService };
