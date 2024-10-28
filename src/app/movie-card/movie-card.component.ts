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
  constructor(private FavService: FavoritesService) { }

  ngOnInit(): void {
  }

  toggleFav(){
    this.fav = !this.fav;
    if(this.fav){
      this.FavService.addFav(this.movie.id);
    }else{
      this.FavService.removeFav(this.movie.id);
    }
    let favs = this.FavService.getFavs();
  }
}
