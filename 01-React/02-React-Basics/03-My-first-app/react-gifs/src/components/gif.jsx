import React, { Component } from 'react';

class Gif extends Component {
    render () {
        const gifsource = `https://media4.giphy.com/media/${this.props.id}/200.gif`;
        if (this.props.selectGif) {
            return <img src={gifsource} alt="gif" className="gif" onClick={() => this.props.selectGif(this.props.id)}/>;
        } else {
            return <img src={gifsource} alt="gif" className="gif" />; 
        }
    }
}

export default Gif;
