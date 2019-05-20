/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * APP ID: 8af2047a-b1cf-476e-a437-dbf635ff0759
 * KEY: YpxFBa9x1ToHLouwC1ZukvSdrq85szAU
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
//Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
//Views
import ArticleListView from './views/ArticleListView';
import ArticleView from './views/ArticleView'

/** Redux setup */
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

/** Navigation setup */
const AppNavigator = createStackNavigator(
  {
    ArticleListView: { screen: ArticleListView },
    ArticleView: { screen: ArticleView }
  },
  {
    initialRouteName: "ArticleListView"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}