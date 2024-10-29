import { Component, OnInit } from '@angular/core';
import { Movie } from '../home/Movies';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favs = Array<Movie>();
  configUrl = environment.urlConfig+'/favs';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFavs();
  }

  getFavs(){
    let sesion = localStorage.getItem('user');
    if(sesion){
      this.http.post(this.configUrl+"/getUserFavs", {user: sesion}).subscribe((data: any)=>{
        this.favs = data
        return data;
      });
    }
  }


}
