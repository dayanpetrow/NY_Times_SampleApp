import React from 'react';
import articlesReducer from '../reducers/articlesReducer';
import * as actions from '../actions'

describe('ArticlesReducer', () => {
    let articles = [
        { title: 'Title 1' }, { title: "Title 2" }, { title: "Title 3" }
    ]
    let action = {
        type: actions.FETCH_POPULAR_ARTICLES_SUCCESS,
        payload: {
            data: {
                results: articles
            }
        }
    }
    it('should return new state with articles', () => {
        let state = articlesReducer({}, action);
        expect(state).toStrictEqual(articles);
    });
});