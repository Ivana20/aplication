import { Subject } from 'rxjs';

import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { ingredients } from './../shared/ingredient.modul';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.module';

@Injectable()
export class RecipeService {
 
  recipeChanged = new Subject<Recipe[]>()

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxAJcSQRs2u2vkyS5GoKLm66Op0CqWt0rjg&usqp=CAU',
      [new ingredients('Meat', 1), new ingredients('Franch Fries', 20)]
    ),
    new Recipe(
      'Another test recipe',
      'This is a test',
      'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/quizzes/fast_food_smarts_rmq/650x350_fast_food_smarts_rmq.jpg',
      [new ingredients('Buns', 2), new ingredients('Meat', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: ingredients[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.slice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
