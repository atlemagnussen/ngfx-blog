import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Post } from "../models/post.model";
import { AppState } from "../app.state";

@Component({
    selector: "read-blog",
    templateUrl: "./readblog.component.html",
    styleUrls: ["./readblog.component.css"],
})
export class ReadblogComponent implements OnInit {

    posts: Observable<Post[]>;

    constructor(private store: Store<AppState>) {
        this.posts = this.store.select('post');
    }

    ngOnInit() {
        console.log('read init');
    }
}
