import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Components */
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthGuard } from './auth.guard';
import { DetailsMovieComponent } from './details-movie/details-movie.component';

const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'search/:query', component: SearchComponent
}, {
  path: 'login', component: LoginComponent
}, {
  path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard]
}, {
  path: 'details/:id', component: DetailsMovieComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
