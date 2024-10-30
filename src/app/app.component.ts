import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from './favorites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movies';
  route = '';
  showComplements = true;


  constructor(private FavService: FavoritesService, private router: Router) {
    this.route = router.url;
    if(this.route !== '/' && this.route !== '/search'){
      this.showComplements = false;
    }
    FavService.getFavs();
  }
  ngOnInit(): void {
    this.FavService.getFavs();
    const script = document.createElement('script');
    script.type="text/javascript";
    script.text = `
    window.addEventListener('load', async function () {
    await Clerk.load()

    if (Clerk.user) {
      document.getElementById('login-button').innerHTML = \`
        <a class="text-white font-medium text-xl px-4 py-2" href="/favorites">Favorites</a>
        <div id="user-button"></div>
      \`

      const userButtonDiv = document.getElementById('user-button')

      Clerk.mountUserButton(userButtonDiv, {
        afterSignOutUrl: '/'
      })
        let user = localStorage.getItem('user')
      if(!user){
        localStorage.setItem('user', Clerk.user.id)
        setTimeout(
          ()=>{
          window.location.reload();
        }, 1500);
      }
    }else{
      if(localStorage.getItem('user')){
        window.location.reload();
        localStorage.removeItem('user')
      }
    }
  })
    `
    document.body.appendChild(script);
    
  }
}
