
import { RecipeService } from './../../recipe.service';
import { Component, Input, OnInit } from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
      this.recipe = this.recipeService.getOneRecipe(this.index);
  }
}
