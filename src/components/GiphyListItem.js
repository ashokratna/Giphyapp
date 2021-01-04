import React from 'react';
import styled from 'styled-components';

const Gif = styled.img`
`;

const GiphyListItem = ({ gif }) => {
    const gifImageInfo = gif.images.fixed_height_small
    return ( 
            <Gif src = { gifImageInfo.url }
                alt = { gifImageInfo.slug }
                height = { gifImageInfo.height }
                width = "125" >
            </Gif>
    )
}

export default GiphyListItem