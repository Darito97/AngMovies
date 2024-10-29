import { Component, OnInit } from '@angular/core';
import { Movie } from '../home/Movies';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
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
  };
  configUrl = environment.urlConfig+'/movies/random';
  urlImage = ""  

  constructor(private http: HttpClient) { 
    this.getMovie();
  }

  ngOnInit(): void {
  }

  getMovie(){
    this.http.get(this.configUrl).subscribe((data) => {
      let response = data as Movie;
      this.movie = response;
      this.urlImage = "https://image.tmdb.org/t/p/original" + this.movie.poster_path;
      console.log(this.movie, this.urlImage);
    });
  }
}
