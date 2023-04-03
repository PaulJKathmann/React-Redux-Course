import React, { Component } from 'react';
import Gif from './gif';
import GifList from './giflist';
import SearchBar from './searchbar';

class App extends Component {
    render () {
        const gifs = [ 
            { id: "jUwpNzg9IcyrK" },
            { id: "H8oJsiC2isDdEPZhtJ" },
            { id: "WDwVikYThYLm8HywbP" },
        ];
        return (
            <div className="container">
                <div className="left-scene">
                    <SearchBar />
                    <div className="selected-gif">
                        <Gif id="WDwVikYThYLm8HywbP" />
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs={gifs} />
                </div>
            </div>
        );
    }
}

export default App;
