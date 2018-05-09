import { Component, OnInit, Input } from '@angular/core';
import { Location }                 from '@angular/common';
import { Router, ActivatedRoute }   from '@angular/router';

import { CommentService }           from '../providers/comment.service';
import { Comment }                  from '../../models/comment.model';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './form-update-comment.component.html',
  styleUrls: ['./form-update-comment.component.css'],
  providers: [CommentService]
})
export class EditCommentComponent implements OnInit {

  @Input() comment: Comment;

  constructor(private route: ActivatedRoute,
              private commentService: CommentService,
              private location: Location,
              private router: Router) { }

  // Perform initialization logic, when component is fully set up.
  ngOnInit() {
    this.getComment();
  }


  //
  // This method passes user id as a parameter
  // to the commentService to get the comment.
  //
  getComment(): void {
    const param = this.route.snapshot.paramMap.get('id');

    this.commentService.getComment(param)
      .subscribe((comment) => {
        this.comment = comment
      });
  }


  //
  // This method creates a comment object from input fields,
  // and pass it as a parameter to commentService method
  // to update the comment.
  //
  updateComment(obj: any): void{
    const param = this.route.snapshot.paramMap.get('id');
    this.comment.username = obj.usernameField;
    this.comment.usercomment = obj.usercommentField;

    this.commentService.updateComment(param, this.comment)
    .subscribe((result)=>{
      this.router.navigate(['/yosemite']); // Go to yosemite page.
    })
  }


  // Go to previous page.
  goBack(): void {
    this.location.back();
  }

}
