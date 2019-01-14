import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class MovieForm extends Component {
    render() {
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Movie
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <TextField required id="title" name="title" label="Title" fullWidth />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
};

export default MovieForm;