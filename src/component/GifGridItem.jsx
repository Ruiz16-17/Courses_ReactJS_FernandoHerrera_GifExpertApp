import PropTypes from 'prop-types';
import React from 'react';

export const GifGridItem = ({id, url, title}) => {
    return (
        <div 
            key={id}
            className="card animate__animated animate__bounce"
        >
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propType = {
    id : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    url :PropTypes.string.isRequired
    
}