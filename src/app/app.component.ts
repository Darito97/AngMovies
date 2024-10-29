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

  constructor(private FavService: FavoritesService, private router: Router) {
    this.route = router.url;
    FavService.getFavs();
  }
  ngOnInit(): void {
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

      Clerk.mountUserButton(userButtonDiv)
      localStorage.setItem('user', Clerk.user.id)
      

    }else{
      localStorage.removeItem('user')
    }
  })
    `
    document.body.appendChild(script);
  }
}
