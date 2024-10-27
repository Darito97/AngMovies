import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Movies, Movie } from './Movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  configUrl = 'http://localhost:3000/movies/1';  
  movies: Array<Movie> = [];

  constructor(private http: HttpClient) { 
    this.getMovies();
  }

  ngOnInit(): void {
  }

  getMovies(){
    this.http.get(this.configUrl).subscribe((data) => {
      let response = data as Movies;
      this.movies = response.results;
    });
  }

}
