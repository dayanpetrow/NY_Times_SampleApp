import React from 'react';
import enzyme from "enzyme";
import { App } from '../App.js';

describe('App.js', () => {

    it('should render successfully', () => {
        const wrapper = enzyme.mount(<App />);
        expect(wrapper.length).toEqual(1);
    });

});
