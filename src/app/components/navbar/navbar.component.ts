import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { MealsService } from './../../meals.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  categories: any[] = [];
  constructor(private _MealsService: MealsService) { }
  @Output() categorySelected = new EventEmitter<string>();

  onSelectCategory(category: string): void {
    this.categorySelected.emit(category);
  }
  ngOnInit(): void {
    this._MealsService.getCategories().subscribe({
      next: (data) => {
        this.categories = data.categories;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
