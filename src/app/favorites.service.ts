import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  urlConfig = 'http://localhost:3000/favs';
  favs = Array<string>();
  sesion = false;
  user = "";

  constructor(private toastr: ToastrService, private http: HttpClient) {
    this.favs = [];
    this.isAuth();
  }

  addFav(fav: string): void{
    if(this.sesion){
      this.favs.push(fav);
      this.toastr.success('Añadido a favoritos', 'Favoritos', { positionClass: 'toast-bottom-center' });
      this.http.post(this.urlConfig+"/createOrUpdate", {fav, user: this.user, remove: false}).subscribe((data)=>{
        console.log(data);
      });
    }else{
      window.location.href = '/login';
    }
  }

  removeFav(fav: string){
    this.favs = this.favs.filter(f => f !== fav);
    this.toastr.info('Eliminado de favoritos', 'Favoritos', { positionClass: 'toast-bottom-center' });
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
      this.user = user;
    }
    this.sesion = false;
  }
  getFavsWithUser(){

  }


}
