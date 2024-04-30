import { Component, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
@Input() rating!:number;
@Input() maxStars!:number
faStar = faStar;
faStarHalf = faStarHalf;
get stars(){
  if(this.rating > this.maxStars) this.rating = this.maxStars; 
  return Array(Math.floor(this.rating)).fill(0);
}
}
