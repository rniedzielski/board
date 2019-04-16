import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});

import WhillBox from './WhillBox';

describe('WhillBox', () => {
    it('should return selected array lenghth', () => {
        // given
        const pictures = [
            'strawberry',
            'banana',
            'orange',
            'monkey'
        ]
        const selected = [2, 3, 1]

        // when
        const container = shallow(<WhillBox selected={selected} pictures={pictures} />);
        
        // then
        expect(container.find('img')).toHaveLength(3);
    });

    it('should return selected array lenghth', () => {
        // given
        const pictures = [
            'strawberry',
            'banana',
            'orange',
            'monkey'
        ]
        const selected = [2, 3, 1]

        // when
        const container = shallow(<WhillBox selected={selected} pictures={pictures} />);
        
        // then
        expect(container.find('img').get(0).props.src).toEqual('orange');
        expect(container.find('img').get(1).props.src).toEqual('monkey');
        expect(container.find('img').get(2).props.src).toEqual('banana');
    });
});