import { Component } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

interface AppState {
    post: Post;
};

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    
    post: Observable<Post>;
    text: string;

    constructor(private store: Store<AppState>) {
        this.post = this.store.select('post');
    }
}
