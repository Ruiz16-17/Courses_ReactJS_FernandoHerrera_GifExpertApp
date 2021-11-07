import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGif = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGif(category)
        .then(images => {
            setState({
                data: images,
                loading: false
            })
        });
    }, [category]); //when de void array is present it mean that this will be executed one time

    return state;
}
