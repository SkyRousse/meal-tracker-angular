import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template:`
    <div class="meal add">
      <h3>Add Item</h3>
      <h5><input type="text" placeholder="Name" #newMealName></h5>
      <h5><input type="text" placeholder="Category" #newMealCategory></h5>
      <h5><input type="text" placeholder="Notes" #newMealNotes></h5>
      <p><input type="number" placeholder="Calories" #newMealCalories></p>
      <button (click)="addMeal(newMealName, newMealCategory, newMealNotes, newMealCalories)">Add</button>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<string[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newMealName: HTMLInputElement, newMealCategory: HTMLInputElement, newMealNotes: HTMLInputElement, newMealCalories: HTMLInputElement){
    var params: string[] = [newMealName.value, newMealCategory.value, newMealNotes.value, newMealCalories.value];
    this.onSubmitNewMeal.emit(params);
    newMealName.value = "";
    newMealCategory.value = "";
    newMealNotes.value = "";
    newMealCalories.value = "";
  }
}
