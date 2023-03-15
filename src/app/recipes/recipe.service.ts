import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe(
          'Sample recipe',
          'This is just a sample',
          'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
          ]
        ),
        new Recipe(
          'Big Burger',
          'What else you need to say?',
          'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)  
          ]
          )
      ];

      getRecipes(){
        return this.recipes.slice();
      }

      getOneRecipe(index: number){
        return this.recipes[index];
      }

}