import React from 'react';
import ReactDOM from 'react-dom';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});

import Buttons from './Buttons';

describe('Buttons', () => {
    let container;

    beforeEach(() => {
        container = shallow(<Buttons />);
    });

    it('should render buttons component', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Buttons />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should return true if is button start', () => {
       expect(container.contains(<button type="button">start</button>)).toEqual(true);
    });

    it('should return true if is button stop', () => {
        expect(container.contains(<button  type="button">stop</button>)).toEqual(true);
    });

    it('should return true if is button stop and is disabled', () => {
        container.setProps({stopAction: true});
        expect(container.contains(<button  type="button" disabled>stop</button>)).toEqual(true);
    });
});