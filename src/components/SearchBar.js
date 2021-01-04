import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs(props => ({
    type : "text",
  
    size: props.size || "1em",
  }))`

    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    
    width: 1024px;
  
    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    margin-top: 40px;
    padding: ${props => props.size};
  `;

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: ''
        }
    }

    handleSearchBarChange(searchTerm) {     
        searchTerm.replace(/ /g,"+");    
        this.setState({ searchTerm })
        this.props.onChange(searchTerm)
    }

    render() {
        return (
                        <Input
                            placeholder = "Search all the GIFs..."
                            value = { this.state.searchTerm }
                            onChange = {
                                (ev) => this.handleSearchBarChange(ev.target.value)
                        }/>
        )
    }
}

export default SearchBar