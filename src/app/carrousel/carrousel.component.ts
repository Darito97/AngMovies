import { Component, OnInit } from '@angular/core';
import { Movie } from '../home/Movies';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

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
  configUrl = environment.urlConfig+'/movies';
  urlImage = ""
  hide = "";
  waiting = true;  

  constructor(private http: HttpClient, private router: Router) { 
    this.getMovie();
    this.isHide();
  }

  ngOnInit(): void {
  }

  getMovie(){
    this.http.post(this.configUrl, {}).subscribe((data) => {
      let response = data as Movie;
      this.movie = response;
      this.urlImage = "https://image.tmdb.org/t/p/original" + this.movie.poster_path;
      this.waiting = false;
    });
  }
  isHide(){
    this.router.events.subscribe((val) => {
      if(this.router.isActive("/search", true) || this.router.isActive("/", true) || this.router.isActive("/search/*", true)){
        this.hide = "";
      }else{
        this.hide = "hidden";
      }
    });
  }
}
