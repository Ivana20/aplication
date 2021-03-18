import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from './../recipes/recipe.module';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService  {

    constructor(private http: HttpClient, private recipeService :RecipeService) {}

    storeRecipe() {

        const recipes = this.recipeService.getRecipes();
        this.http.put('https://ng-cours-default-rtdb.firebaseio.com/recipes.json', recipes)
        .subscribe((res)=> {
            console.log(res);
        });
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://ng-cours-default-rtdb.firebaseio.com/recipes.json')
        .pipe
        (map(recipes => {
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
                };
            });
        }),
            tap(recipes => {
                this.recipeService.setRecipe(recipes);
            })
        )
    }
}