import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template:`
  <div class="meal edit">
    <h3>Edit Item</h3>
    <h4>Name: {{ meal.name }}</h4>
    <h5><span>Meal:</span> {{ meal.mealCategory }} </h5>
    <h5><span>Calories:</span> {{ meal.calories }} </h5>
    <p><span>Notes:</span> {{ meal.notes }}</p>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
