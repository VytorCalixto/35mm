import { getMovies } from '../../../actions/actionCreator';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
  componentWillMount() {
    // Before the component mounts, we will get the movies
  }

  render() {
    return (
      <div className="App">
        <h1>MOVIE DETAIL</h1>
        <p>{this.props.match.params.movieId}</p>
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