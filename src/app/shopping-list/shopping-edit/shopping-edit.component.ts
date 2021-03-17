import { NgForm } from '@angular/forms';
import { from, Subscription } from 'rxjs';
import { ingredients } from './../../shared/ingredient.modul';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('myForm') form!: NgForm;
  @ViewChild('f') slForm!: NgForm
  subscription?: Subscription;
  editMode = false;
  editedItemIndex?: number;
  editedItem?: ingredients;

  @ViewChild('nameInput') nameInputRef?: ElementRef;
  @ViewChild('nameAmount') amountInputRef?: ElementRef;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
    });
  }

  onSubmit() {
    const ingName = this.nameInputRef?.nativeElement.value;
    const ingAmount = this.amountInputRef?.nativeElement.value;
    const newIngredient = new ingredients(ingName, ingAmount);
    if(this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex!, newIngredient)
    } else {
      this.slService.addIngredient(newIngredient);
    }
    //ne radi reset
  //  this.editMode = false;
  //form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex!);
    this.onClear();
  }


  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}


