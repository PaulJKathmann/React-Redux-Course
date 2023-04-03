import React, { Component } from 'react';

class Gif extends Component {
    render () {
        const gifsource = `https://media4.giphy.com/media/${this.props.id}/200.gif`;
        return <img src={gifsource} alt="gif" className="gif" />;
    }
}

export default Gif;
