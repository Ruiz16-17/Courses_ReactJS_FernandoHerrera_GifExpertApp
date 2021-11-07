import PropTypes from 'prop-types';
import React from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {loading, data: images} = useFetchGif(category);

    return (
        <>

            <h3 className="animate__animated animate__flash">{category}</h3>

            {loading && <p>Loading...</p> }

            <div className="card-grid">
            
                {images.map(image => {

                    return (
                        <GifGridItem
                            key={image.id}
                            {...image}

                        />
                    )
                })}

            </div>
        </>
    )
}

GifGrid.propType = {
    category : PropTypes.string.isRequired
    
}