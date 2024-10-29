import { Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Movie } from './home/Movies';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService implements OnInit {
  urlConfig = 'http://localhost:3000/favs';
  favs = Array<Movie>();
  sesion = false;
  user = "";

  constructor(private toastr: ToastrService, private http: HttpClient) {
    this.isAuth();
  }

  ngOnInit(): void {
    this.getFavs();
  }

  addFav(fav: Movie): void{
    let sesion = localStorage.getItem('user');
    if(sesion){
      this.favs.push(fav);
      this.http.post(this.urlConfig+"/createOrUpdate", {fav, user: this.user, remove: false}).subscribe((data)=>{
        this.toastr.success('Añadido a favoritos', 'Favoritos', { positionClass: 'toast-bottom-center' });
      });
    }else{
      window.location.href = '/login';
    }
  }

  removeFav(fav: Movie){
    this.favs = this.favs.filter(f => f.id !== fav.id);
    let sesion = localStorage.getItem('user');
    if(sesion){
      this.http.post(this.urlConfig+"/createOrUpdate", {fav, user: this.user, remove: true}).subscribe((data)=>{
        this.toastr.info('Eliminado de favoritos', 'Favoritos', { positionClass: 'toast-bottom-center' });
      });
    }else{
      window.location.href = '/login';
    }
  }

  getFavs(){
    console.log('getFavs');
    let sesion = localStorage.getItem('user');
    if(sesion){
      this.http.post(this.urlConfig+"/getUserFavs", {user: sesion}).subscribe((data: any)=>{
        this.favs = data
        return data;
      });
    }
  }

  isFav(fav: number){
    let f = this.favs.find(f => f.id === fav);
    return f ? true : false;
  }
  
  isAuth(){
    let user = localStorage.getItem('user');
    if(user){
      this.sesion = true;
      this.user = user;
    }
    this.sesion = false;
  }

}
