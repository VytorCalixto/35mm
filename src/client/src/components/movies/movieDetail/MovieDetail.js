import { getMovies } from '../../../actions/actionCreator';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import MovieForm from '../MovieForm';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
});

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { edit: false };
    }

    render() {
        const { classes } = this.props;
        const movie = this.props.movies.find((m) => {
            if (m._id === this.props.match.params.movieId) return m;
            return false;
        });
        console.log(movie);
        return (
            <div>
                {movie ? (
                    <div>
                        <Paper>
                            <Typography variant='h2' component='h1'>
                                {movie.title}
                            </Typography>
                            <Typography color='textSecondary'>
                                {movie.release_date}
                                <br />
                                {movie.genre}
                                <br />
                                {movie.actors}
                                <br />
                                {movie.trailer}
                            </Typography>
                            <Typography component="p">
                                {movie.plot}
                            </Typography>
                        </Paper>
                        <Fab color="primary" aria-label="Add" className={classes.fab} onClick={() => { this.state.edit = !this.state.edit }}>
                            <Icon>edit_icon</Icon>
                        </Fab>
                    </div>
                ) : null}
                <MovieForm />
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MovieDetail));