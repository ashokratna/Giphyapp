import React from 'react'
import GiphyListItem from './GiphyListItem';
import styled from 'styled-components';


const Containergif = styled.div`
    margin: 10px;
    border: 1px solid;
    border-radius: 3px;
`;

const Containerimg = styled.div`
    margin : auto;
`;



const GiphyList = ({ gifs }) => {
    const gifList = gifs.map((gif, i) =>
        <Containergif className ="column" key = { i }>            
                <Containerimg>
                    <GiphyListItem 
                        gif = { gif }
                        key = { gif.id }
                    />
                </Containerimg>             
        </Containergif>
    )

    return ( 
            <div className = "ui column centered grid" >
                <div className = "sixteen wide column" >
                    <div className = "ui six column grid" > 
                            { gifList }           
                    </div> 
                </div>
            </div>
    )
}

export default GiphyList