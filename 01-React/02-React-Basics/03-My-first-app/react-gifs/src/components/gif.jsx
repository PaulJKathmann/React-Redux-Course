import React, { Component } from 'react';

class Gif extends Component {
    

    render () {
        const gifsource = "https://media4.giphy.com/media/WDwVikYThYLm8HywbP/200.gif";
        return (
            <div className="selected-gif">
                <img src={gifsource} alt="gif" className="selected-gif" />
            </div>
        );
    }
}

export default Gif;
