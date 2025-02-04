import { Component } from '@angular/core';
import { MealComponent } from "../meal/meal.component";
import { NavbarComponent } from "../navbar/navbar.component";
@Component({
  selector: 'app-home',
  imports: [MealComponent, NavbarComponent],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedCategory: string = '';

  onCategorySelected(category: string): void {
    this.selectedCategory = category;
  }
}
