import { RecipeService } from './../recipe.service';
import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ){}

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) =>{
        this.id = params['id']
        this.recipe = this.recipeService.getOneRecipe(this.id);
        console.log(this.id)
      }
    )

    // this.id = +this.route.snapshot.paramMap.get('id');
    // this.recipe = this.recipeService.getOneRecipe(this.id);
    // console.log(this.id)
  }

  toEdit(){
    // this.router.navigate(['edit'], {relativeTo: this.route})
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }
}
