import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
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
        <h2>Add/Edit Items</h2>
        <div class="add-items">
          <new-meal (onSubmitNewMeal)="createMeal($event)">
          </new-meal>
        </div>
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
  createMeal(params: string[]): void {
    this.mealList.push(
      new Meal(params[0], params[1], params[2], parseInt(params[3]), this.mealList.length)
    )
  }
}
