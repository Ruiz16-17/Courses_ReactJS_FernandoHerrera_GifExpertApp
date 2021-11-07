import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import React from "react";
import { GifGrid } from "../../component/GifGrid";
import { useFetchGif } from "../../hooks/useFetchGif";

jest.mock('../../hooks/useFetchGif');

describe('Test in <GifGrid/>', () => {

    const category = 'One punch man';
    
    test('Should show correctly', () => {
        
        useFetchGif.mockReturnValue({
            data: [],
            loading:true
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show the items when the images have been loaded useFecthGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/img.jpg',
            title:'Any thing'
        }]

        useFetchGif.mockReturnValue({
            data: gifs,
            loading:false
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
})
