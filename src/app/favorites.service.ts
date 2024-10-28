import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favs = Array<string>();
  sesion = false;

  constructor() {
    this.favs = [];
  }

  addFav(fav: string): void{
    this.favs.push(fav);
  }

  removeFav(fav: string){
    this.favs = this.favs.filter(f => f !== fav);
  }

  getFavs(){
    return this.favs;
  }

  isFav(fav: string){
    return this.favs.includes(fav);
  }
  
  isAuth(){
    let user = localStorage.getItem('user');
    if(user){
      this.sesion = true;
    }
    this.sesion = false;
  }


}
