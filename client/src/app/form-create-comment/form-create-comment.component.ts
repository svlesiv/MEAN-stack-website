import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommentService }                          from '../providers/comment.service';

@Component({
  selector: 'app-form',
  templateUrl: './form-create-comment.component.html',
  styleUrls: ['./form-create-comment.component.css']
})
export class FormComponent implements OnInit {

  // When a new comment will be created, send an event to the parent
  // to refresh its comment list.
  @Output() newCommentEvent = new EventEmitter();

  comment:any = {};
  constructor(private commentService: CommentService) { }

  ngOnInit() {}


  //
  // This method calls commentService to save the comment.
  //
  save(newCommentForm):void{
    this.commentService.addComment(this.comment)
        .subscribe((comment)=>{

          this.newCommentEvent.emit();
          newCommentForm.reset();        // reset the form

        })

  }


}
