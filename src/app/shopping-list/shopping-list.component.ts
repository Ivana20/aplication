import { ShoppingListService } from './shopping-list.service';
import { ingredients } from './../shared/ingredient.modul';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients?: ingredients [];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientChange.subscribe((ingredients: ingredients[]) => {
      this.ingredients = ingredients;
    });
  }
}
