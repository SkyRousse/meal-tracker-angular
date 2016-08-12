import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: "my-app",
  template:`
    <div class="app-wrapper">
      <h1>Meal Tracker</h1>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Example meal name", "Meal description", 0),
      new Meal("Another example meal", "Meal description",300)
    ]
  }
}
