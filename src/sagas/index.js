import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios';

const KEY = "YpxFBa9x1ToHLouwC1ZukvSdrq85szAU";
const FETCH_ARTICLES_URL = `https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=${KEY}`


/**
 * ROOT SAGA
 */
export default function* rootSaga() {
    yield all([
        watchFetchPopularArticles()
    ]);
}

/**
 * FETCH ALL ARTICLES
 */
function* watchFetchPopularArticles() {
    yield takeLatest(
        actions.FETCH_POPULAR_ARTICLES,
        workerFetchPopularArticles
    );
}

function* workerFetchPopularArticles() {
    try {
        const response = yield call(fetchPopularArticles);
        yield put({ 
            type: actions.FETCH_POPULAR_ARTICLES_SUCCESS,
            payload: response
        });
    } catch (error) {
        yield put({
            type: actions.FETCH_POPULAR_ARTICLES_FAILURE,
            payload: error
        });
    }
}

function fetchPopularArticles() {
    return axios({
        method: "GET",
        url: FETCH_ARTICLES_URL
    });
}
