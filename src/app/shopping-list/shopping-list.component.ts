import { ShoppingListService } from './shopping-list.service';
import { ingredients } from './../shared/ingredient.modul';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients?: ingredients [];
  private igChangeSub!: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientChange
    .subscribe((ingredients: ingredients[]) => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }

  onEditItem(index: number) {
        this.slService.startedEditing.next(index);
  }
}
