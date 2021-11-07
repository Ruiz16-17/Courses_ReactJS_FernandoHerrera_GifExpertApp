import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import React from "react";
import { GifExpertApp } from '../../component/GifExpertApp';
describe('Test on <GifExpertApp/>', () => {
    
    
    test('Should show correctly', () => {
        const wrapper = shallow(<GifExpertApp />); 
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show a categoryies list', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>); 
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })
    
})
