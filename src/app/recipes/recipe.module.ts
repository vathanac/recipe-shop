import { RecipeRoutingModule } from './recipe-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from '../shared/dropdown.directive';

@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    DropdownDirective,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    RecipeRoutingModule,
  ],
  exports: [
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    DropdownDirective,
  ],
})
export class RecipeModule {}
