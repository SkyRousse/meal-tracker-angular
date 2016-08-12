import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent],
  template:`
    <div class="meal-wrapper">
      <div class="main">
      <h2>Tracked Meals</h2>
        <meal-display *ngFor="#currentMeal of mealList"
        [meal]="currentMeal"
        [class.selected]="currentMeal === selectedMeal"
        (click)="mealClicked(currentMeal)"
        >
        </meal-display>
      </div>
      <div class="edit">
      <h2>Edit Items</h2>
        <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
        </edit-meal-details>
      </div>
    </div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}
