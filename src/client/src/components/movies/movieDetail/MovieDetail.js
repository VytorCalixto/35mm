import { editMovie, deleteMovie } from '../../../actions/actionCreator';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import CloseIcon from '@material-ui/icons/Close';
import MovieForm from '../MovieForm';
import TrailerEmbed from './TrailerEmbed';
import Button from '@material-ui/core/Button';
import TrashIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';

const styles = theme => ({
    fab: {
        float: 'right',
        position: 'fixed',
        right: '10%',
        bottom: '10%',
        margin: theme.spacing.unit,
        zIndex: 1300,
    },
    paper: {
        margin: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            margin: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
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
        return (
            <div>
                {movie ? (
                    <div>
                        <Paper className={classes.paper}>
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
                                {/* {movie.trailer} */}
                            </Typography>
                            <TrailerEmbed videoUrl={movie.trailer} />
                            <Typography component="p">
                                {movie.plot}
                            </Typography>
                            <Button variant="contained" color="secondary" onClick={() => this.props.deleteMovie(this.props.match.params.movieId)}>
                                <TrashIcon />
                                Delete
                            </Button>
                        </Paper>
                        <Fab color="primary" aria-label="Add" className={classes.fab} onClick={() => { this.setState({ edit: !this.state.edit }) }}>
                            {this.state.edit ? (<CloseIcon />) : (<Icon>edit_icon</Icon>)}
                        </Fab>
                    </div>
                ) : (
                        <Typography variant='h2' component='h1'>
                            The movie you're searcing for doesn't exist :(
                                <br />
                            <Link to="/movies"><Button color="secondary" variant="contained">Go back!</Button></Link>
                        </Typography>
                    )}
                {this.state.edit ? (
                    <Paper className={classes.paper}>
                        <MovieForm movie={movie} buttonName="Edit" submit={this.props.updateMovie} />
                    </Paper>
                ) : null}
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
        updateMovie: (movie) => {
            dispatch(editMovie(movie));
        },
        deleteMovie: (movieId) => {
            dispatch(deleteMovie(movieId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MovieDetail));