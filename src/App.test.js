import React from 'react';
import ReactDOM from 'react-dom';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});

import App from './App';

describe('WhillBox', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('starts with a win text "You win: 0 $"', () => {
        const container = shallow(<App />);
        const text = container.find('p').text();

        expect(text).toEqual('You win: 0 $');
    });

    it('should Buttons elment be defined', () => {
        const container = shallow(<App />);

        expect(container.find('Buttons')).toBeDefined();
    });
});
