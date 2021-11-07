import { shallow } from "enzyme";
import React from "react";
import { GifGridItem } from "../../component/GifGridItem";

describe('Test in <GifGridItem/>', () => {

    const id = 1;
    const title = 'Title GifGridItem';
    const url = 'https://localhost:8080/something.jpg';

    const image ={
        id: id,
        title: title,
        url: url
    }
    const wrapper = shallow(<GifGridItem {...image}/>)

    test('Should show correctly the component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Should have a paragraph with the title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })
    
    test('should have a the same image as a url and alt props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
        
    })
    
    test('should have animate__bounce', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes(className)).toBe(true);
    })
    
});
