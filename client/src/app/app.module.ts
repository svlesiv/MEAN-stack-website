import { BrowserModule}         from '@angular/platform-browser';
import { HttpClientModule }     from '@angular/common/http';
import { NgModule }             from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { FormsModule }          from '@angular/forms';
import { AppComponent }         from './app.component';

import { NavigationComponent }  from './navigation/navigation.component';
// https://www.npmjs.com/package/ng-simple-slideshow
import { SlideshowModule }      from 'ng-simple-slideshow';
import { EditCommentComponent } from './form-update-comment/form-update-comment.component';
import { CommentComponent }     from './comment/comment.component';
import { FormComponent }        from './form-create-comment/form-create-comment.component';

import { YosemitePageComponent }from './yosemite-page/yosemite-page.component';
import { HomePageComponent }    from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    NavigationComponent,
    FormComponent,
    YosemitePageComponent,
    HomePageComponent,
    EditCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
