import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  hide = "";

  formSearch = new FormGroup({
    search: new FormControl('')
  });
  constructor(private router: Router) { 
    this.isHide();
  }
  searchMovie(){
    let query = this.formSearch.value.search;
    this.router.navigate(['/search', query]);
  }
  isHide(){
    this.router.events.subscribe((val) => {
      if(this.router.isActive("/search", true) || this.router.isActive("/", true) || this.router.routerState.snapshot.url.includes("/search/")){
        this.hide = "";
      }else{
        this.hide = "hidden";
      }
    });
  }

}
