import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// run the saga middleware
sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route path="/article/:views" component={ArticlePage} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;