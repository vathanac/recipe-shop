import { ShoppingListService } from './../shopping-list.service';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{
  subscription :Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem: Ingredient;

  @ViewChild('f', {static:false}) slForm : NgForm;
  constructor(private slService: ShoppingListService){}


  ngOnInit() {
    this.subscription = this.slService.startEdit.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        console.log(this.editMode);
        this.editedItem = this.slService.getOneIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
    })
  }

  onSubmit(){
    const value = this.slForm.value
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, ingredient)
    } else {
      this.slService.addIngredient(ingredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }

  onReset(){
    this.slForm.setValue({
      name: '',
      amount: '',
    })
    this.editMode = false;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.editMode = false;
    this.slForm.reset();
    console.log('deleted');
  }
}
