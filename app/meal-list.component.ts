import { Component } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent],
  template:`
    <div class="meal-wrapper">
      <meal-display *ngFor="#currentMeal of mealList"
      [meal]="currentMeal">
      </meal-display>
    </div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  mealClicked(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
