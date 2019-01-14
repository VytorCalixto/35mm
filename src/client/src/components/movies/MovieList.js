import React, { Component } from 'react';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

class MovieList extends Component {
    render() {
        const { classes } = this.props;
        let movies = this.props.movies;
        return (
            <div>
                <Grid container className={classes.root} spacing={16}>
                    {movies.map((movie, index) => (
                        <Grid item xs={3} key={index}>
                            <MovieCard movie={movie} index={index} />
                        </Grid>
                    ))}
                </Grid>
                <Fab color="primary" aria-label="Add" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </div>
        );
    }
}

export default withStyles(styles)(MovieList);
