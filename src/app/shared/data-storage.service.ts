import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  onSaveRecipe() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://recipe-shop-course-project-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://recipe-shop-course-project-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          if (!recipes) {
            return [];
          }
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.saveRecipes(recipes);
        })
      );
  }
}
