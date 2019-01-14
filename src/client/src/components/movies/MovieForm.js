import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';

class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            genre: '',
            release_date: '',
            actors: '',
            plot: '',
            trailer: '',
            set: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        if (!this.state.set && Object.keys(this.props.movie).length) {
            this.setState({
                title: this.props.movie.title || this.props.movie.Title || '',
                genre: this.props.movie.genre || this.props.movie.Genre || '',
                release_date: this.props.movie.release_date || this.props.movie.Released || '',
                actors: this.props.movie.actors || this.props.movie.Actors || '',
                plot: this.props.movie.plot || this.props.movie.Plot || '',
                trailer: this.props.movie.trailer || '',
                set: true
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.movie);
        if (nextProps.movie) {
            this.setState({
                title: nextProps.movie.title || nextProps.movie.Title || '',
                genre: nextProps.movie.genre || nextProps.movie.Genre || '',
                release_date: nextProps.movie.release_date || nextProps.movie.Released || '',
                actors: nextProps.movie.actors || nextProps.movie.Actors || '',
                plot: nextProps.movie.plot || nextProps.movie.Plot || '',
                trailer: nextProps.movie.trailer || '',
                set: true
            });
        }
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit() {
        let movie = {
            title: this.state.title,
            genre: this.state.genre,
            release_date: this.state.release_date,
            actors: this.state.actors,
            plot: this.state.plot,
            trailer: this.state.trailer,
            _id: (this.props.movie) ? (this.props.movie._id || null) : null
        }
        this.props.submit(movie);
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="h5" gutterBottom>
                    Movie
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <TextField variant="outlined" required id="title" name="title" label="Movie Title" fullWidth onChange={this.handleInputChange} value={this.state.title} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField variant="outlined" required id="genre" name="genre" label="Movie Genre" fullWidth onChange={this.handleInputChange} value={this.state.genre} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField variant="outlined" id="release_date" name="release_date" label="Release Date" fullWidth onChange={this.handleInputChange} value={this.state.release_date} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField variant="outlined" id="actors" name="actors" label="Actors" fullWidth onChange={this.handleInputChange} value={this.state.actors} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField variant="outlined" id="plot" name="plot" label="Movie Plot" fullWidth multiline rowsMax="4" onChange={this.handleInputChange} value={this.state.plot} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField variant="outlined" id="trailer" name="trailer" label="Trailer Link" fullWidth onChange={this.handleInputChange} value={this.state.trailer} />
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                    {this.props.buttonName}
                    <DoneIcon />
                </Button>
            </React.Fragment>
        );
    }
};

export default MovieForm;