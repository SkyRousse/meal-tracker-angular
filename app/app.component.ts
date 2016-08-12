import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';


@Component ({
  selector: "my-app",
  directives: [MealListComponent],
  template:`
    <div class="app-wrapper">
      <h1>Meal Tracker</h1>
      <meal-list [mealList]="meals"></meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Peach Bannana Smoothie", "Breakfast: 8fl oz", 225),
      new Meal("Burrito", "Lunch: with sourcream and guac",1000),
      new Meal("Sun Chips", "Harvest Cheddar 1oz",140),
      new Meal("Spaghetti & Meatballs", "With marinar sauce and parm",440),
    ]
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
