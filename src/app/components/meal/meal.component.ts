import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MealsService } from '../../meals.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal',
  imports: [CommonModule],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.scss'
})
export class MealComponent implements OnChanges {

  @Input() selectedCategory: string = '';
  allMeals: any = '';
  meals: any = '';

  constructor(private _MealsService: MealsService) { }

  ngOnInit(): void { this.getAllMeals(); }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCategory'] && this.selectedCategory) {
      if (this.selectedCategory === 'all') {
        // this._MealsService.getAllMeals().subscribe({
        //   next: (res) => {
        //     this.meals = res.meals;
        //     console.log(res);

        //   },
        //   error: (err) => {
        //     console.log(err);
        //   }
        // })
        this.getAllMeals();
      } else {

        this._MealsService.getMealsByCategory(this.selectedCategory).subscribe({
          next: (res) => {
            this.meals = res.meals;
            console.log(res);

          },
          error: (err) => {
            console.log(err);
          }
        })
      }
    }

  }
  getAllMeals(): void {

    this._MealsService.getAllMeals().subscribe({
      next: (res) => {
        this.meals = res.meals;
        console.log(res);

      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
