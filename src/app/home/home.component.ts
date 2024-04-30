import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../models/Food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {  
   //this.foods = this.foodService.getAll();
    this.route.params.subscribe(params => {
      if (params['searchItem'])
        this.foods = this.foodService.getAll().filter(food =>
          food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()));
      else this.foods = this.foodService.getAll();});
  }
}
