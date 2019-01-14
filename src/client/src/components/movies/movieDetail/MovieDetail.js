import { getMovies } from '../../../actions/actionCreator';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {edit: false};
    }

    render() {
        const movie = this.props.movies.find((m) => {
            if (m._id === this.props.match.params.movieId) return m;
            return false;
        });
        console.log(movie);
        return (
            <div className="App">
                <h1>{movie ? movie.title: null}</h1>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllMovies: () => {
            dispatch(getMovies());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);