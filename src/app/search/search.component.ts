import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Movie, Movies } from '../home/Movies';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchValue: string = '';
  configUrl = environment.urlConfig + '/movies/search';
  movies: Array<Movie> = [];

  constructor(private router: Router, private http: HttpClient) { 
    this.assingSearchValue();
    this.searchMovies();
  }

  ngOnInit(): void {
  }

  assingSearchValue() {
    this.searchValue = this.router.url.split('/')[2];
  }
  searchMovies(){
    let movie = this.searchValue;
    this.http.get(this.configUrl + '/' + movie).subscribe((data) => {
      let response = data as Movies;
      this.movies = response.results;
    });
  }

}
