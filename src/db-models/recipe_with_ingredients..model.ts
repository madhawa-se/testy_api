import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, BelongsTo, ForeignKey } from "sequelize-typescript";
import Ingredient from './ingredient.model';
import Recipe from './recipes.model';

@Table(
    {
        tableName: "recipes_has_ingredient",
        timestamps: false
    }
)
export default class RecipeWithIngredients extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column
    recipeWithIngredientId?: number;

    @ForeignKey(() => Recipe)
    @Column
    recipeId!: number;

    @ForeignKey(() => Ingredient)
    @Column
    ingredientId!: number;

    @AllowNull(false)
    @NotEmpty
    @Column
    amount!: string;

}
