import { RecipeService } from '../recipe.service';
import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private  router: Router){

  }

  ngOnInit(): void {
      this.recipes = this.recipeService.recipes;
      this.recipeService.recipeChanged.subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      })
  }

  toRecipeEdit() {
    this.router.navigate(['new'], { relativeTo: this.route})
  }
}
