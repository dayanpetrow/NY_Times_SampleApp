import React from 'react';
import enzyme from "enzyme";
import { NotFoundPage } from '../pages/NotFoundPage';

describe('NotFound Page', () => {
    const props = {
        history: {
            push: jest.fn()
        }
    }

    it('should have title 404 Not Found', () => {
        const wrapper = enzyme.mount(<NotFoundPage {...props}/>);
        const title = wrapper.find('h1').at(0);
        expect(title.text()).toEqual('404 Not Found');
    });

    it('should call history.push with / argument on See all articles button click', () => {
        const wrapper = enzyme.mount(<NotFoundPage {...props}/>);
        const seeAllArticlesButton = wrapper.find('button.ant-btn.ant-btn-primary').at(0);
        seeAllArticlesButton.simulate('click');
        expect(props.history.push).toHaveBeenCalledWith('/');
    });

});
