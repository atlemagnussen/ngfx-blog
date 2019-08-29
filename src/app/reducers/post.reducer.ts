import * as PostActions from '../actions/post.actions';
import { Post } from '../models/post.model';

export type Action = PostActions.All;

/// Default app state
const initialState: Post = {
    name: 'Initial tutorial',
    url: 'https://google.com'
}

/// Helper function to create new state object
const newState = (state: Post, newData: Post) => {
    return Object.assign({}, state, newData);
}

export const postReducer = (state: Post[] = [initialState], action: PostActions.All) => {
    console.log(action.type, state);

    switch (action.type) {
        case PostActions.ADD_POST:
            return [...state, action.payload];
        
        // case PostActions.REMOVE_POST:

        default:
            return state;
    }
}
