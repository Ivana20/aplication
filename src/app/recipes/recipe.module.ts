import { ingredients } from './../shared/ingredient.modul';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: ingredients[];
    
    constructor(name : string, description : string, imagePath : string, ingredients: ingredients[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    } 
}