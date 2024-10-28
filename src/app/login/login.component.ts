import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    const script = document.createElement('script');
    script.type="text/javascript";
    script.text = `
    if(window.Clerk) {
    if(!Clerk.user) {
      document.getElementById('formSing').innerHTML = \`
        <div id="sign-in"></div>
      \`

      const signInDiv = document.getElementById('sign-in')

      Clerk.mountSignIn(signInDiv)
      }
    }
    window.addEventListener('load', async function () {

    console.log('load')
    await Clerk.load()

    if (Clerk.user) {
      document.getElementById('login-button').innerHTML = \`
        <div id="user-button"></div>
        <a class="text-white font-semibold text-2xl px-4 py-2" href="/favorites">Favorites</a>
      \`

      const userButtonDiv = document.getElementById('user-button')

      Clerk.mountUserButton(userButtonDiv)
      localStorage.setItem('user', Clerk.user.id)
      console.log(Clerk.user.id)
    } else {
      localStorage.removeItem('user')
      document.getElementById('formSing').innerHTML = \`
        <div id="sign-in"></div>
      \`

      const signInDiv = document.getElementById('sign-in')

      Clerk.mountSignIn(signInDiv)
    }
  })
    `
    document.body.appendChild(script);
  }

}
