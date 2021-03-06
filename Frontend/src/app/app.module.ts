import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailService } from './services/cocktail.service';
import { HttpClientModule } from '@angular/common/http';
import { CocktailComponent } from './cocktail/cocktail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailPageComponent } from './cocktail-page/cocktail-page.component';
import { MatDividerModule } from '@angular/material/divider';
import { CocktailBrowseComponent } from './cocktail-browse/cocktail-browse.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { CocktailCreateComponent } from './cocktail-create/cocktail-create.component';
import { CocktailCommentComponent } from './cocktail-comment/cocktail-comment.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { FavouriteComponent } from './favourite/favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CocktailListComponent,
    CocktailPageComponent,
    CocktailBrowseComponent,
    CocktailBrowseComponent,
    CocktailCommentComponent,
    CocktailCreateComponent,
    CommentCreateComponent,
    FavouriteComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatListModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatChipsModule,
    MatDialogModule
  ],
  providers: [
    CocktailService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
