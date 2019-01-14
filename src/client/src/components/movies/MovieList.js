import React, { Component } from 'react';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import MovieForm from './MovieForm';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { addMovie } from '../../actions/actionCreator';
import OMDBSearch from './OMDBSearch';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing.unit * 3,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    fab: {
        float: 'right',
        position: 'fixed',
        right: '10%',
        bottom: '10%',
        margin: theme.spacing.unit,
        zIndex: 1300,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
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

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            add: false
        }
    }

    componentWillMount() {
        this.props.cleanOMDB();
    }

    render() {
        const { classes } = this.props;
        let movies = this.props.movies;
        return (
            <div>
                {this.state.add ? (
                    <Paper className={classes.paper}>
                        <MovieForm buttonName="Add" submit={this.props.addMovie} movie={this.props.omdb} />
                        <OMDBSearch />
                    </Paper>
                ) : null}
                {movies.length ? (
                    <Grid container className={classes.root} spacing={16} alignItems="stretch" justify="space-evenly">
                        {movies.map((movie, index) => (
                            <Grid item xs={4} key={index}>
                                <MovieCard movie={movie} index={index} />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                        <Paper className={classes.paper}>
                            <Typography variant="display2">Looks like there's no movies. Why don't you add one?</Typography>
                        </Paper>
                    )}
                <Fab color="secondary" aria-label="Add" className={classes.fab} onClick={() => this.setState({ add: !this.state.add })}>
                    {this.state.add ? (<CloseIcon />) : (<AddIcon />)}
                </Fab>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        omdb: state.omdb
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMovie: (movie) => {
            dispatch(addMovie(movie));
        },
        cleanOMDB: () => {
            dispatch({ type: 'CLEAN_OMDB' });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MovieList));
