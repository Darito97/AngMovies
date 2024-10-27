import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  formSearch = new FormGroup({
    search: new FormControl('')
  });
  constructor(private router: Router) { 
    
  }
  searchMovie(){
    let query = this.formSearch.value.search;
    this.router.navigate(['/search', query]);
  }

}
