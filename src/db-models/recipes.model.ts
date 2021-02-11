import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, BelongsToMany,HasMany, Scopes } from "sequelize-typescript";
import Ingredient from './ingredient.model';
import RecipeWithIngredients from './recipe_with_ingredients..model';
@Scopes(() => ({
    ingredient: {
        include: [{
            model: Ingredient,
            through: { attributes: [] },
        }],
    }
}))
@Table(
    {
        tableName: "recipes",
        timestamps: false
    }
)
export default class Recipe extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column
    recipeId?: number

    @AllowNull(false)
    @NotEmpty
    @Column
    name!: string

    @BelongsToMany(() => Ingredient, () => RecipeWithIngredients)
    ingredients?: Ingredient[];

}

