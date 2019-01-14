import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { searchOMDB } from '../../actions/actionCreator';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

class OMDBSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <Typography variant="h5">Search a movie with OMDB</Typography>
                <TextField variant="outlined" id="title" name="title" label="Enter movie title" fullWidth onChange={this.handleInputChange} value={this.state.title} />
                <Button variant="outlined" color="secondary" onClick={() => {this.props.searchMovie(this.state.title)}}>
                    Search
                    <SearchIcon/>
                </Button>
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
        searchMovie: (movie) => {
            dispatch(searchOMDB(movie));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OMDBSearch);