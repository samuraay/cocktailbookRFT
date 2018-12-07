import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { CocktailService } from '../services/cocktail.service';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-cocktail-page',
  templateUrl: './cocktail-page.component.html',
  styleUrls: ['./cocktail-page.component.scss']
})
export class CocktailPageComponent implements AfterViewInit {

  myImgPath = 'assets/ginTonic.jpeg';

  cocktail: Cocktail;
  comments: Comment[];

  ngAfterViewInit(): void {
  }

  constructor(cocktailService: CocktailService, commentService: CocktailService) {
  cocktailService.getAllCocktails().subscribe( (cocktails: Cocktail[]) => {
      cocktails.forEach((cocktail) => console.log(cocktail.cocktailName));
      console.log('got the cocktails: ', cocktails);
      this.cocktail = cocktails[1];
    });
    commentService.getAllComments().subscribe((comment: Comment[]) => {
      comment.forEach((cm) => console.log(cm));
      comment.forEach( (cm) => {
        if (cm.commentId === this.cocktail.cocktailId) {
          this.comments.push(cm);
        }
      });
      console.log('got the comments: ', comment);
    });
  }


}
