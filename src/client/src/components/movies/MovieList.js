import React, { Component } from 'react';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import MovieForm from './MovieForm';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { addMovie } from '../../actions/actionCreator';

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

    render() {
        const { classes } = this.props;
        let movies = this.props.movies;
        return (
            <div>
                <Grid container className={classes.root} spacing={12} alignItems="stretch" justify="space-evenly">
                    {movies.map((movie, index) => (
                        <Grid item xs={3} key={index}>
                            <MovieCard movie={movie} index={index} />
                        </Grid>
                    ))}
                </Grid>
                <Fab color="primary" aria-label="Add" className={classes.fab} onClick={() => this.setState({ add: !this.state.add })}>
                    <AddIcon />
                </Fab>
                {this.state.add ? (
                    <Paper className={classes.paper}>
                        <MovieForm buttonName="Add" submit={this.props.addMovie} />
                    </Paper>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMovie: (movie) => {
            dispatch(addMovie(movie));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MovieList));
