import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../models/comment.model';


@Component({
  selector: 'app-cocktail-comment',
  templateUrl: './cocktail-comment.component.html',
  styleUrls: ['./cocktail-comment.component.scss']
})
export class CocktailCommentComponent implements OnInit {

  @Input()
  comment: Comment;


  constructor() { }

  ngOnInit() {
  }

}
