import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template:`
  <div class="meal edit">
    <h3>Edit Item</h3>
    <h5>Name: <input [(ngModel)]="meal.name"/></h5>
    <h5><span>Meal:</span> <input [(ngModel)]="meal.mealCategory"/> </h5>
    <h5><span>Calories:</span><input [(ngModel)]="meal.colories"/></h5>
    <p><span>Notes:</span><input [(ngModel)]="meal.notes"/></p>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
