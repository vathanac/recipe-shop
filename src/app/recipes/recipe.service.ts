import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from "./recipe.model";
import {Subject} from "rxjs";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Injectable} from "@angular/core";

@Injectable()
export class RecipeService{
    recipeSelected = new Subject<Recipe>();
    recipeChanged = new Subject<Recipe[]>();
    // recipes: Recipe[] = [
    //     new Recipe(
    //       'Sample recipe',
    //       'This is just a sample',
    //       'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    //       [
    //         new Ingredient('Meat', 1),
    //         new Ingredient('French Fries', 20)
    //       ]
    //     ),
    //     new Recipe(
    //       'Big Burger',
    //       'What else you need to say?',
    //       'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVjaXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    //       [
    //         new Ingredient('Buns', 2),
    //         new Ingredient('Meat', 1)
    //       ]
    //       )
    //   ];

    recipes: Recipe[] = [];

    constructor(private slService: ShoppingListService) {
    }

      getRecipes(){
        return this.recipes.slice();
      }

      getOneRecipe(index: number){
        return this.recipes[index];
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      addIngredientToShoppingList(newIngredient: Ingredient[]){
        this.slService.addIngredients(newIngredient);
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
      }

      saveRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
      }
}
