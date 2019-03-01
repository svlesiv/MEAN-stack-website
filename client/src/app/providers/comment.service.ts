import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { environment } from '../../environments/environment.prod';
import { Comment } from '../../models/comment.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CommentService {

  private commentsUrl = environment.apiurl;

  constructor(private http:HttpClient) {}

  // CRUD methods

  // Create comment.
  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.commentsUrl + '/api/create', comment, httpOptions);
  }

  // Read all comments.
  getComments() : Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl + '/api');
  }

  // Read one comment.
  getComment(id): Observable<Comment> {
    return this.http.get<Comment>(this.commentsUrl + '/api/' + id);
  }

  // Update comment.
   updateComment(id, comment: Comment): Observable<any>{
    return this.http.put(this.commentsUrl + '/api/update/' + id, comment, httpOptions);
   }

   // Delete comment.
   deleteComment(id: number){
    return this.http.delete(this.commentsUrl + '/api/delete/' + id);
   }
}
