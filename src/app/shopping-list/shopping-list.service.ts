import { Subject } from 'rxjs';
import { ingredients } from './../shared/ingredient.modul';
import { EventEmitter } from "@angular/core";


export class ShoppingListService {

    ingredientChange = new Subject<ingredients[]>();
    startedEditing = new Subject<number>();
     
   private ingredients: ingredients [] = [
        new ingredients('apple', 5),
        new ingredients('Tomatou', 10),
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      getIngredient(index: number) {
        return this.ingredients[index];
      }

      updateIngredient(index: number, newIngredient: ingredients) {
        this.ingredients[index] = newIngredient;
        this.ingredientChange.next(this.ingredients.slice());
      }

      addIngredient(ingredient : ingredients) {
          this.ingredients.push(ingredient);
          this.ingredientChange.next(this.ingredients.slice());
      }

      deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientChange.next(this.ingredients.slice());
      }

      addIngredients(ingredients: ingredients[]) {
        //for (let ingredients of ingredients) {
        //    this.addIngredient(ingredients);
      //  }
        this.ingredients.push(...ingredients);
        this.ingredientChange.next(this.ingredients.slice());
      }

      
}