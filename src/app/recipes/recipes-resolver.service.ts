import { DataStorageService } from './../shared/data-storage.servis';
import { Recipe } from './recipe.module';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor(private dataStorageService :DataStorageService) {}

    resolve(route: ActivatedRouteSnapshot, status: RouterStateSnapshot) {
        return this.dataStorageService.fetchRecipes();
    }
}