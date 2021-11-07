import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import React from 'react';
import { AddCategoryForm } from "../../component/AddCategoryForm";

describe('Test on <AddCategoryForm />', () => {

    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategoryForm setCategories={setCategories}/>); 
    
    beforeEach(() =>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategoryForm setCategories={setCategories}/>); 
    })

    test('Should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should change the textbox', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target:{value}});
    })
    
    test('not should post the info on submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('should called setCategories and clear the textBox', () => {
        
        const value = 'Hola Mundo';

        const input = wrapper.find('input').simulate('change', {target:{value}});
        
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        //expect(setCategories).toHaveBeenCalledTimes(2); For a specific number of calls

        expect(input.prop('value')).toBe('');

    })
    
});
