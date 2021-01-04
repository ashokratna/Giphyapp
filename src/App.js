import React from 'react';
import SearchBar from './components/SearchBar';
import GiphyList from './components/GiphyList';
import _ from 'lodash';


const API_KEY = "ITvMVEdFm11v0QN6zBNNia6xEoq0t8Zy";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            gifs: {}
        };
    }

    componentDidMount() {
        this.fetchGifs("hi");
    }

    fetchGifs(searchTerm) {
        return fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=25`)
            .then(res => res.json())
            .then(json => {
                if (json.error) {
                    alert("Error")
                } else {
                    this.setState({
                        gifs: json
                    })
                }
            })
    }

    render() {
        const fetchGifs = _.debounce((searchTerm) => { this.fetchGifs(searchTerm) }, 200)

        if (!this.state.gifs.data) {
            return null
        } else {
            return ( 
            <div className = "ui grid container" >
                <SearchBar onChange = {
                    (searchTerm) => fetchGifs(searchTerm)
                }/>
                <div className = "ui grid" >
                    <GiphyList gifs = { this.state.gifs.data }/> 
                </div>
                    <h5> You are <strong>beautiful!</strong></h5> 
                </div >
            );
        }
    }
}

export default App