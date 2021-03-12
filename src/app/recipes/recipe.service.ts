import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { ingredients } from './../shared/ingredient.modul';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.module';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=408%2C370',
      [new ingredients('Meat', 1), new ingredients('Franch Fries', 20)]
    ),
    new Recipe(
      'Another test recipe',
      'This is a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=408%2C370',
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
}
