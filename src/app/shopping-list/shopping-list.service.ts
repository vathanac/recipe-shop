import { EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model"
import {Subject} from "rxjs";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startEdit = new Subject<number>();
    private  ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5),
        new Ingredient('Oranges', 5),
      ]

    getIngredient(){
        return this.ingredients.slice();
    }

    getOneIngredient(index: number) {
      return this.ingredients[index];
    }


    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index:number, newIngredient: Ingredient){
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next((this.ingredients.slice()))
    }

    deleteIngredient(index: number){
      this.ingredients.splice(index,1);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
}
