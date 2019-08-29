import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Post } from "../models/post.model";
import { AppState } from "../app.state";
import * as PostActions from '../actions/post.actions';


@Component({
    selector: 'blog-create',
    templateUrl: './blogcreate.component.html',
    styleUrls: ['./blogcreate.component.css']
})
export class BlogcreateComponent implements OnInit {

    constructor(private store: Store<AppState>) { }
    
    addPost(name: string, url: string): void {
        this.store.dispatch(new PostActions.AddPost({name, url}));
    }

    ngOnInit() {
    }

}
