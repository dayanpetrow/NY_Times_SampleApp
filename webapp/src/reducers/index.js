import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';

export default combineReducers({
    allArticles: articlesReducer
})