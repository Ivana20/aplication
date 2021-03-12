import { ingredients } from './../../shared/ingredient.modul';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef?: ElementRef;
  @ViewChild('nameAmount') amountInputRef?: ElementRef;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameInputRef?.nativeElement.value;
    const ingAmount = this.amountInputRef?.nativeElement.value;
    const newIngredient = new ingredients(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }
}