import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MovieIcon from '@material-ui/icons/Movie';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';

const styles = {
    list: {
        width: 280,
    },
    link: {
        textDecoration: 'none'
    }
};

class NavDrawer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.list}>
                <List>
                    <Link to="/" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                    </Link>
                    <Link to="/movies" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon><MovieIcon /></ListItemIcon>
                            <ListItemText primary={'Movies'} />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
            </div>
        );
    }
}

export default withStyles(styles)(NavDrawer);