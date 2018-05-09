// Create Comment Class.
export class Comment {

  // properties
  public username: string = '';
  public usercomment: string = '';

  constructor( username: string, usercomment: string ) {
    this.username = username;
    this.usercomment = usercomment;
  }

}
