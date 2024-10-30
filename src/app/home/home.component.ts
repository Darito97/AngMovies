import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Movies, Movie } from './Movies';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  configUrl = environment.urlConfig+'/movies/1';  
  movies: Array<Movie> = [];
  page: number = 1;
  showButton: boolean = false;
  waiting = true;

  constructor(@Inject(DOCUMENT) private document: Document, private http: HttpClient, private favoritesService: FavoritesService) { 
  }

  ngOnInit(): void {
    setTimeout(()=>{this.getMovies();}, 1000);
  }

  getMovies(){
    this.http.get(this.configUrl).subscribe((data) => {
      let response = data as Movies;
      this.movies = response.results;
      this.waiting = false;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = document.documentElement.scrollTop;
    const element = document.documentElement.scrollHeight;
    if ((yOffSet + scrollTop) > element) {
      this.onScrollDown();
    }
    if(yOffSet > 60){
      this.showButton = true;
    }else{
      this.showButton = false;
    }
  }

  onScrollDown(): void {
    this.page++;
    if(this.page <= 500){
      this.configUrl = environment.urlConfig+'/movies/' + this.page;
      if(this.page <= 500){
        this.http.get(this.configUrl).subscribe((data) => {
          let response = data as Movies;
          if(response.results.length === 0){

          }else{
          this.movies = this.movies.concat(response.results);
        }
        });                              
      }
    }
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }
}
