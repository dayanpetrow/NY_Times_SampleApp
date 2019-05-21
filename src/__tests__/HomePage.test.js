import React from 'react';
import ReactDOM from 'react-dom';
import enzyme from "enzyme";
import HomePage from '../pages/HomePage.js';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
let middlewares = [sagaMiddleware]



describe('Home Page', () => {
    let mockStore;

    const mockState = {};

    const props = {
        articles: [],
        fetchPopularArticles: jest.fn()
    }

    beforeEach(() => {
      mockStore = configureStore(middlewares)(mockState);
    });

    it('renders without crashing', () => {
        const wrapper = enzyme.mount(
            <Provider store={mockStore}>
                <HomePage {...props} />
            </Provider>
        );
        console.log(wrapper.instance());
    })
});
