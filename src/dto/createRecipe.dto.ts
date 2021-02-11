export interface  CreateRecipeDto{
    name:string;
    ingredients:Array<ingredientWithAmount>;
}

export interface  ingredientWithAmount{
  amount:number;
  ingredientId:number;
}