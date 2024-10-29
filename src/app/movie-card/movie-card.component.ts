import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
@Input() movie: any;
  fav = false;
  constructor(private FavService: FavoritesService) {
  }

  ngOnInit(): void {
    this.checkFav();
  }

  toggleFav(){
    this.fav = !this.fav;
    if(this.fav){
      this.FavService.addFav(this.movie);
    }else{
      this.FavService.removeFav(this.movie);
    }
  }

  checkFav(){
    this.fav = this.FavService.isFav(this.movie.id);
  }
}
