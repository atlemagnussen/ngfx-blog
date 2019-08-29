import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { StoreModule } from "@ngrx/store";
import { postReducer } from "./reducers/post.reducer";

import { AppComponent } from "./app.component";
import { ReadblogComponent } from './readblog/readblog.component';
import { BlogcreateComponent } from './blogcreate/blogcreate.component';

@NgModule({
  declarations: [AppComponent, ReadblogComponent, BlogcreateComponent],
  imports: [
      BrowserModule,
      FormsModule,
      StoreModule.forRoot({
          post: postReducer,
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
