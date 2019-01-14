import React, { Component } from 'react';

class TrailerEmbed extends Component {
    constructor(props) {
        super(props);
        this.getVideoId = this.getVideoId.bind(this);
    }

    getVideoId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        let match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : false;
    }

    render() {
        let videoId = this.getVideoId(this.props.videoUrl);
        return (
            <div>
                {videoId ? (
                    <iframe title="youtube-trailer" width="560" height="315" src={"//www.youtube.com/embed/" + videoId} frameborder="0" allowFullScreen></iframe>
                ): null}
            </div>
        );
    }
}

export default TrailerEmbed;