import { ShoppingListService } from './shopping-list.service';
import {Component, OnInit, Output} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  @Output() index: number;
  constructor(private shoppingListService : ShoppingListService){}

  ngOnInit():void {
    this.ingredients = this.shoppingListService.getIngredient();
    this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  onEdit(index: number){
   this.shoppingListService.startEdit.next(index);
   this.index = index;
  }

}
