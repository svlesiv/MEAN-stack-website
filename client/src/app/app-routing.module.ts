import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomePageComponent }     from './home-page/home-page.component';
import { YosemitePageComponent } from './yosemite-page/yosemite-page.component';
import { EditCommentComponent }  from './form-update-comment/form-update-comment.component';


// Set up routes.
const routes: Routes = [
  { path: '', component: HomePageComponent, data: {title: 'Home'} },  // use data{title:''} 
  { path: 'yosemite', component: YosemitePageComponent, data: {title: 'Yosemite'} },   // to set page title dynamically
  { path: 'yosemite/comment/:id', component: EditCommentComponent, data: {title: 'Yosemite'} }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {}
