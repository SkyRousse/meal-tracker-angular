import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';


@Component ({
  selector: "my-app",
  directives: [MealListComponent],
  template:`
    <div class="app-wrapper">
      <div class="header-images">
        <img src="/resources/images/egg-icon.png" alt="egg-icon">
        <img src="/resources/images/milk-icon.png" alt="milk-icon">
        <img src="/resources/images/peanut-icon.png" alt="peanut-icon">
        <img src="/resources/images/soy-icon.png" alt="soy-icon">
        <img src="/resources/images/wheat-icon.png" alt="wheat-icon">
        <img src="/resources/images/fish-icon.png" alt="fish-icon">
      </div>
      <h1>Meal Tracker</h1>
      <meal-list [mealList]="meals"></meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Peach Bannana Smoothie", "Breakfast", "With hotsouce 8fl oz", 225),
      new Meal("Burrito", "Lunch",  "with sourcream and guac",1000),
      new Meal("Sun Chips", "Snack", "Harvest Cheddar 1oz",140),
      new Meal("Spaghetti & Meatballs", "Dinner", "With marinar sauce and parm",440),
    ]
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
