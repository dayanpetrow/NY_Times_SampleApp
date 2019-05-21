import React from 'react';
import enzyme from "enzyme";
import ConnectedArticlePage, { ArticlePage } from '../pages/ArticlePage.js';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('Article Page', () => {
    const props = {
        allArticles: [
            {
                title: "Title 1", adx_keywords: 'keyword; keyword2', byline: "by Dayan",
                published_date: "21-05-2019", section: "IT", abstract: "Abstact 1", views: 1,
                media: [{ 'media-metadata': [{ url: '/', format: "Jumbo" }] }]
            },
            {
                title: "Title 2", adx_keywords: 'keyword; keyword2', byline: "by Dayan",
                published_date: "21-05-2019", section: "IT", abstract: "Abstact 2", views: 2,
                media: [{ 'media-metadata': [{ url: '/', format: "Jumbo" }] }]
            },
            {
                title: "Title 3", adx_keywords: 'keyword; keyword2', byline: "by Dayan",
                published_date: "21-05-2019", section: "IT", abstract: "Abstact 3", views: 3,
                media: [{ 'media-metadata': [{ url: '/', format: "Jumbo" }] }]
            },
        ],
        fetchPopularArticles: jest.fn(),
        match: {
            params: {
                views: 2
            }
        },
        history: {
            push: jest.fn()
        },
        article: {
            title: "Title 2", adx_keywords: 'keyword; keyword2', byline: "by Dayan",
            published_date: "21-05-2019", section: "IT", abstract: "Abstact 2", views: 2,
            media: [{ 'media-metadata': [{ url: '/', format: "Jumbo" }] }]
        }
    }

    it('should call fetchPopularArticles on render when allArticles has length of 0', () => {
        const wrapper = enzyme.mount(
            <ArticlePage
                allArticles={[]}
                article={null}
                match={props.match}
                fetchPopularArticles={props.fetchPopularArticles}
            />);
        expect(props.fetchPopularArticles).toHaveBeenCalled();
    });

    it('should render a loader when allArticles is empty and article is null', () => {
        const wrapper = enzyme.mount(
            <ArticlePage
                allArticles={[]}
                article={null}
                match={props.match}
                fetchPopularArticles={props.fetchPopularArticles}
            />);
            const loader = wrapper.find('.ant-spin-nested-loading');
            expect(loader.length).toEqual(1);
    });

    it('should display article not found when allArticles contains articles but it cannot find the article based on URL params', () => {
        const wrapper = enzyme.mount(
            <ArticlePage
                allArticles={props.allArticles}
                article={null}
                match={props.match}
                fetchPopularArticles={props.fetchPopularArticles}
            />);
        const alertSpan = wrapper.find('.ant-alert-description');
        expect(alertSpan.text()).toContain('The article could not be found!');
    });

    it('can click on See all articles button which calls history.push with / argument when article not found error is displayed', () => {
        const wrapper = enzyme.mount(
            <ArticlePage
                allArticles={props.allArticles}
                article={null}
                match={props.match}
                fetchPopularArticles={props.fetchPopularArticles}
                history={props.history}
            />);
        const seeAllArticlesButton = wrapper.find('button.ant-btn.ant-btn-primary').at(0);
        seeAllArticlesButton.simulate('click');
        expect(props.history.push).toHaveBeenCalledWith('/');
    });

    it('should call previousArticle() on Previous Article button click', () => {
        const wrapper = enzyme.mount(<ArticlePage {...props} />);
        const prevArticleSpy = jest.spyOn(wrapper.instance(), 'previousArticle');
        const buttonContainer = wrapper.find('div.NextPrevArticle');
        const buttonPrevArticle = buttonContainer.find('button.ant-btn.ant-btn-primary').at(0);
        buttonPrevArticle.simulate('click');
        expect(prevArticleSpy).toHaveBeenCalled();
    });

    it('should call nextArticle() on Next Article button click', () => {
        const wrapper = enzyme.mount(<ArticlePage {...props} />);
        const nextArticleSpy = jest.spyOn(wrapper.instance(), 'nextArticle');
        const buttonContainer = wrapper.find('div.NextPrevArticle');
        const buttonNextArticle = buttonContainer.find('button.ant-btn.ant-btn-primary').at(2);
        buttonNextArticle.simulate('click');
        expect(nextArticleSpy).toHaveBeenCalled();
    });

    it('should call props.history.push on Back to articles in Button.Group', () => {
        const wrapper = enzyme.mount(<ArticlePage {...props} />);
        const buttonContainer = wrapper.find('div.NextPrevArticle');
        const buttonBackToArticles = buttonContainer.find('button.ant-btn.ant-btn-primary').at(1);
        buttonBackToArticles.simulate('click');
        expect(props.history.push).toHaveBeenCalledWith('/');
    });

    it('should disable Next Article button when displaying the last article of allArticles', () => {
        const newProps = {
            ...props,
            article: {...props.allArticles[2]},
            match: {
                params: {
                    views: 3
                }
            }
        }
        const wrapper = enzyme.mount(<ArticlePage {...newProps} />);
        const nextArticleSpy = jest.spyOn(wrapper.instance(), 'nextArticle');
        const buttonContainer = wrapper.find('div.NextPrevArticle');
        const buttonNextArticle = buttonContainer.find('button.ant-btn.ant-btn-primary').at(2);
        buttonNextArticle.simulate('click');
        expect(nextArticleSpy).not.toHaveBeenCalled();
    });

    it('should disable Prev Article button when displaying the first article of allArticles', () => {
        const newProps = {
            ...props,
            article: {...props.allArticles[0]},
            match: {
                params: {
                    views: 1
                }
            }
        }
        const wrapper = enzyme.mount(<ArticlePage {...newProps} />);
        const prevArticleSpy = jest.spyOn(wrapper.instance(), 'previousArticle');
        const buttonContainer = wrapper.find('div.NextPrevArticle');
        const buttonPrevArticle = buttonContainer.find('button.ant-btn.ant-btn-primary').at(0);
        buttonPrevArticle.simulate('click');
        expect(prevArticleSpy).not.toHaveBeenCalled();
    });

    it('should display content of props.article on the page', () => {
        const wrapper = enzyme.mount(<ArticlePage {...props} />);
        const popularityTitle = wrapper.find('h1.Article__Popularity').at(0);
        expect(parseInt(popularityTitle.text())).toEqual(props.article.views);
    })

    it('should render connected ArticlePage', () => {
        const mockStore = configureStore();
        let store = mockStore({ allArticles: props.allArticles });
        let wrapper = enzyme.mount(
            <Provider store={store}>
                <ConnectedArticlePage match={props.match} />
            </Provider> 
        );
        expect(wrapper.length).toEqual(1);
    })

    it('should render connected ArticlePage and call fetchPopularArticles when allArticles is empty', () => {
        const mockStore = configureStore();
        let store = mockStore({ allArticles: [] });
        let wrapper = enzyme.mount(
            <Provider store={store}>
                <ConnectedArticlePage match={props.match} article={{}} />
            </Provider> 
        );
        expect(props.fetchPopularArticles).toHaveBeenCalled();
        expect(wrapper.length).toEqual(1);
    })
});