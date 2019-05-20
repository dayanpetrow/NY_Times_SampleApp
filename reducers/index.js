import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import singleArticleReducer from './singleArticleReducer';

export default combineReducers({
    allArticles: articlesReducer,
    singleArticle: singleArticleReducer
})