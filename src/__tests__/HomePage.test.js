import React from 'react';
import enzyme from "enzyme";
import ConnectedHomePage, { HomePage } from '../pages/HomePage.js';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('Home Page', () => {
    const props = {
        allArticles: [
            { title: "Title 1", abstract: "Abstact 1", views: 1, media: [{'media-metadata': [{url: '/', format: "Jumbo"}]}]},
            { title: "Title 2", abstract: "Abstact 2", views: 2, media: [{'media-metadata': [{url: '/', format: "Jumbo"}]}]},
            { title: "Title 3", abstract: "Abstact 3", views: 3, media: [{'media-metadata': [{url: '/', format: "Jumbo"}]}]},
            { title: "Title 4", abstract: "Abstact 4", views: 4, media: [{'media-metadata': [{url: '/', format: "Jumbo"}]}]},
            { title: "Title 5", abstract: "Abstact 5", views: 5, media: [{'media-metadata': [{url: '/', format: "Jumbo"}]}]},
            { title: "Title 6", abstract: "Abstact 6", views: 6, media: [{'media-metadata': [{url: '/', format: "Jumbo"}]}]}
        ],
        fetchPopularArticles: jest.fn(),
        history: {
            push: jest.fn()
        }
    }

    it('should call fetchPopularArticles on render', () => {
        const wrapper = enzyme.mount(<HomePage {...props} />);
        wrapper.instance().forceUpdate();
        expect(props.fetchPopularArticles).toHaveBeenCalled();
    })

    it('should render 5 articles on render', () => {
        const wrapper = enzyme.mount(<HomePage {...props} />);
        const renderedArticles = wrapper.find('div.ArticleList').children();
        expect(renderedArticles.length).toEqual(5);
    })

    it('should render more articles on Load More button click', () => {
        const wrapper = enzyme.mount(<HomePage {...props} />);
        const loadMoreSpy = jest.spyOn(wrapper.instance(), 'loadMoreArticles');
        const buttonContainer = wrapper.find('div.LoadMore');
        const loadMoreButton = buttonContainer.childAt(0);
        loadMoreButton.simulate('click');
        expect(loadMoreSpy).toHaveBeenCalled();
        const renderedArticles = wrapper.find('div.ArticleList').children();
        expect(renderedArticles.length).toEqual(props.allArticles.length);
    })

    it('should render a loader when props.allArtices is empty', () => {
        const wrapper = enzyme.mount(<HomePage allArticles={[]} fetchPopularArticles={jest.fn()} />);
        const loader = wrapper.find('.ant-spin-nested-loading');
        expect(loader.length).toEqual(1);
    })

    it('should call openArticle() with history.push() on Read more button click', () => {
        const wrapper = enzyme.mount(<HomePage {...props} />);
        const firstArticle = wrapper.find('div.RowArticle__Header').first();
        const openArticleButton = firstArticle.find('button.ant-btn.ant-btn-primary');
        openArticleButton.simulate('click');
        expect(props.history.push).toHaveBeenCalled();
    });

    it('should render connected HomePage', () => {
        const mockStore = configureStore();
        let store = mockStore({ allArticles: [], article: {} });
        let wrapper = enzyme.mount(
            <Provider store={store}>
                <ConnectedHomePage />
            </Provider> 
        );
        expect(wrapper.length).toEqual(1);
    })
});
