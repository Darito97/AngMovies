import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStatusService {
  user = "";

  constructor() {
    this.user = localStorage.getItem('user') || '';
   }

  setUser(user: string) {
    this.user = user;
    localStorage.setItem('user', user);
  }
  getUser(){
    return this.user;
  }
  isAuth(){
    return this.user !== '';
  }
}
