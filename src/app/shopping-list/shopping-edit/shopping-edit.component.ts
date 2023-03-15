import { ShoppingListService } from './../shopping-list.service';
import {Component, ElementRef,  ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('inputName', {static: false}) inputNameRef: ElementRef;
  @ViewChild('inputAmount', {static: false}) inputAmountRef: ElementRef;

  constructor(private slService: ShoppingListService){}

  onAddItem(){
    const ingName = this.inputNameRef.nativeElement.value;
    const ingAmount = this.inputAmountRef.nativeElement.value;
    const ingredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(ingredient);
  
  }

}
