import { Component, OnInit,Input } from '@angular/core';
import {CommentService}            from './../providers/comment.service';
import { Router, ActivatedRoute }  from '@angular/router';
import { Observable }              from 'rxjs';
import { Comment }                 from '../../models/comment.model';


@Component({
  selector: 'app-yosemite-page',
  templateUrl: './yosemite-page.component.html',
  styleUrls: ['./yosemite-page.component.css'],
  providers: [CommentService]
})
export class YosemitePageComponent implements OnInit {

  // Image sources for gallery component.
  imageSources = ['assets/img/yosemite/1.jpg',
                  'assets/img/yosemite/2.jpg',
                  'assets/img/yosemite/3.jpg'];

  comments: Comment[];

  constructor(private commentService: CommentService,
              private route: ActivatedRoute,
              private router: Router){}


  // Perform initialization logic, when component is fully set up.
  ngOnInit() {
    this.listComments();
  }


  //
  // This method calls commentService to list the comments.
  //
  listComments():void{
    this.commentService.getComments().subscribe(comments => {
        this.comments = comments;
      });
  }

}
