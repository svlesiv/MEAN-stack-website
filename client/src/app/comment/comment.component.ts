import { Component, OnInit, Input } from '@angular/core';
import { CommentService }           from './../providers/comment.service';
import { Location }                 from '@angular/common';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  // comment passed in from app-comment tag in yosemite-page.component.html
  @Input() comment;

  constructor(private commentService: CommentService) { }
  ngOnInit() { }


  //
  // This method calls commentService to delete the comment.
  //
  deleteComment(){
    this.commentService.deleteComment(this.comment._id)
    .subscribe((result)=>{
      location.reload();      //reload page after deletion
    })
  }

}
