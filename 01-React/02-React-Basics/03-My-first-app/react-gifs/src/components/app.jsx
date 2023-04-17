import React, { Component } from 'react';
import Gif from './gif';
import GifList from './giflist';
import SearchBar from './searchbar';
import giphy from 'giphy-api';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gifs: [],
            selectedGifId: "H8oJsiC2isDdEPZhtJ",
        }

        this.search("Homer thinking");
    }

    search = (query) => {
        // API Call to Giphy API
        giphy('1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm').search( {
            q: query,
            rating: 'g',
            limit: 10
        }, (error, result) => {
            console.log(result.data);
            this.setState({gifs: result.data});
        });
    }
    render () {
        return (
            <div className="container">
                <div className="left-scene">
                    <SearchBar search={this.search} />
                    <div className="selected-gif">
                        <Gif id={this.state.selectedGifId} />
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs={this.state.gifs} />
                </div>
            </div>
        );
    }
}

export default App;
