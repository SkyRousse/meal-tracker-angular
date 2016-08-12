import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  template:`
    <div class="meal">
      <h3>Food Item</h3>
      <h4>{{ meal.name }}</h4>
      <h5>Meal: {{ meal.mealCategory }} </h5>
      <h5>Calories: {{ meal.calories }} </h5>
      <p>Notes: {{ meal.notes }}</p>
    </div>
  `
})
export class MealComponent {
  public meal: Meal;
}
