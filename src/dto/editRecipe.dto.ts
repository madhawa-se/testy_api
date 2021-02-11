export interface  EditRecipeDto{
    name:string;
    ingredients:Array<ingredientWithAmount>;
}

export interface  ingredientWithAmount{
  amount:number;
  ingredientId:number;
}