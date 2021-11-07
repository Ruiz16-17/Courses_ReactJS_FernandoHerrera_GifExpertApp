import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const AddCategoryForm = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(categories => [inputValue,...categories]);
            setInputValue('');
        }
        
    }

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>

    )
}

AddCategoryForm.propType = {
    setCategories : PropTypes.func.isRequired
}