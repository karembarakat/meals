import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MealsService } from './../../meals.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  categories: any[] = [];
  selectedCategory: string = 'all';

  @Output() categorySelected = new EventEmitter<string>();
  constructor(private _MealsService: MealsService) { }

  onSelectCategory(category: string): void {
    this.categorySelected.emit(category);
    this.selectedCategory = category;
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
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;
  }
}
