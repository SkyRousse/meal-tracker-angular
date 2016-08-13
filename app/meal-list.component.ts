import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriesPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template:`
    <div class="meal-wrapper">
      <div class="main">
        <h2>Tracked Meals</h2>
        <div class="view-selector">
          <select (change)="onChange($event.target.value)" class="selector">
            <option value="all" selected="selected">Show All</option>
            <option value="high">High Calorie</option>
            <option value="low">Low Calorie</option>
          </select>
        </div>
        <meal-display *ngFor="#currentMeal of mealList | calories:filterCalories"
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
  public filterCalories: string = "all";
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
  onChange(filterOption){
  this.filterCalories = filterOption;
  }
}
