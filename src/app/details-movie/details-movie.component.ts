import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Movie } from '../home/Movies';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit {
  urlConfig = environment.urlConfig+"/movies/details/";
  id: number = 0;
  movie: Movie = {
    "backdrop_path": "",
    "id": 0,
    "title": "",
    "original_title": "",
    "overview": "",
    "poster_path": "",
    "media_type": "",
    "adult": false,
    "original_language": "",
    "genre_ids": [1,2,3],
    "popularity":   1,
    "release_date": "",
    "video": false,
    "vote_average": 1,
    "vote_count": 0
  }

  fav= false;

  constructor(private route: ActivatedRoute, private http: HttpClient, private favorites: FavoritesService) { }

  ngOnInit(): void {
    this.getMovieDetails();
    this.checkFav();
  }

  getMovieDetails(){
    let id = this.route.snapshot.params.id;
    this.http.get(this.urlConfig+""+id).subscribe((data) => {
      console.log(data);
      let response = data as Movie;
      this.movie = response;
    });
  }
  toggleFav(){
    this.fav = !this.fav;
    if(this.fav){
      this.favorites.addFav(this.movie);
    }else{
      this.favorites.removeFav(this.movie);
    }
  }
  
  checkFav(){
    this.fav = this.favorites.isFav(this.movie.id);
  }

}
