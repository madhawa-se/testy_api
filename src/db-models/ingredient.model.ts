import { IIngredient } from './../entity/interfaces/i_ingredient';
import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, HasMany, BelongsToMany } from "sequelize-typescript";
import RecipeWithIngredients from './recipe_with_ingredients..model';
import Recipe from './recipes.model';

@Table(
  {
    tableName: "ingredient",
    timestamps: false
  }
)
export default class Ingredient extends Model{

  @AutoIncrement
  @PrimaryKey
  @Column
  ingredientId!: number

  @AllowNull(false)
  @NotEmpty
  @Column
  name!: string

  @BelongsToMany(() => Recipe, () => RecipeWithIngredients)
  recipes?: Recipe[];

  @HasMany(() => RecipeWithIngredients)
  recipeWithIngredients!: RecipeWithIngredients[];

}