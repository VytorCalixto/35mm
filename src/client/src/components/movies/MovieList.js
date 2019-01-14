import React, { Component } from 'react';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

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
});

class MovieList extends Component {
    render() {
        const { classes } = this.props;
        let movies = this.props.movies;
        return (
            <Grid container className={classes.root} spacing={16}>
                {movies.map((movie, index) => (
                    <Grid item xs={3}  key={index}>
                        <MovieCard movie={movie} index={index}/>
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default withStyles(styles)(MovieList);
