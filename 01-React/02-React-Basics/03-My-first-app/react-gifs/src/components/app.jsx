import React, { Component} from 'react';
import SearchBar from './searchbar';

class App extends Component {
    render () {
        return(
            <div className="container">
                <div className="left-scene">
                    <SearchBar />
                </div>
                <div className="right-scene">
                </div>
            </div>
        );
    }
}

export default App;
