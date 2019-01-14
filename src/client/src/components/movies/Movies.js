import { getMovies } from '../../actions/actionCreator';
import React, { Component } from 'react';
import '../../css/App.css';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import { Route } from 'react-router-dom';
import MovieDetail from './movieDetail/MovieDetail';

class Movies extends Component {
  componentWillMount() {
    // Before the component mounts, we will get the movies
    this.props.getAllMovies();
  }

  render() {
    return (
      <div className="App">
        <Route exact path={'/movies'} component={() => <MovieList movies={this.props.movies} />} />
        <Route path={'/movies/:movieId'} component={MovieDetail} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
