import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailComponent } from './cocktail/cocktail.component';
import { HomeComponent } from './home/home.component';
import { CocktailBrowseComponent } from './cocktail-browse/cocktail-browse.component';
import { CocktailPageComponent } from './cocktail-page/cocktail-page.component';
// import { NewCocktailComponent } from './new-cocktail/new-cocktail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cocktail/:id', component: CocktailComponent },
  { path: 'browse', component: CocktailBrowseComponent },
  { path: 'page', component: CocktailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }