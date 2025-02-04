import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1';
  constructor(private _httpClient: HttpClient) { }


  // Fetch all categories
  getCategories(): Observable<any> {
    return this._httpClient.get(`${this.apiUrl}/categories.php`);
  }

  // Fetch meals by category
  getMealsByCategory(category: string): Observable<any> {
    return this._httpClient.get(`${this.apiUrl}/filter.php?c=${category}`);
  }
  getAllMeals(): Observable<any> {
    return this._httpClient.get(`${this.apiUrl}/search.php?s=`);
  }
}
