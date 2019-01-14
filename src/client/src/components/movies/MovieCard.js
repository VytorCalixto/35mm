import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Truncate from 'react-truncate';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 350,
    },
};

class MovieCard extends Component {
    render() {
        let classes = this.props.classes;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <CardMedia
                        className={classes.media}
                        image={this.props.movie.poster}
                        title={this.props.title + " Poster"}
                    />
                    <Typography variant='h5' component='h2'>
                        {this.props.movie.title}
                    </Typography>
                    <Typography className={classes.pos} color='textSecondary'>
                        {this.props.movie.release_date}
                    </Typography>
                    <Typography component="p">
                        <Truncate lines={3} ellipsis={<span>...</span>}>
                            {this.props.movie.plot}
                        </Truncate>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={"movies/" + this.props.movie._id}><Button size='small' variant="contained" color="primary">See More</Button></Link>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(MovieCard);
