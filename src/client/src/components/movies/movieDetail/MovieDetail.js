import { editMovie } from '../../../actions/actionCreator';
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
                                {movie.trailer}
                            </Typography>
                            <Typography component="p">
                                {movie.plot}
                            </Typography>
                        </Paper>
                        <Fab color="primary" aria-label="Add" className={classes.fab} onClick={() => { this.setState({ edit: !this.state.edit }) }}>
                            <Icon>edit_icon</Icon>
                        </Fab>
                    </div>
                ) : null}
                {this.state.edit ? (
                    <Paper className={classes.paper}>
                        <MovieForm movie={movie} buttonName="Editar" submit={this.props.updateMovie} />
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MovieDetail));