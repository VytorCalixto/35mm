import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import NavDrawer from './NavDrawer';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        textDecoration: 'none'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },

};

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = { drawerOpen: false };
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Back" onClick={() => this.setState({ drawerOpen: !this.state.drawerOpen })}>
                            <MenuIcon />
                        </IconButton>
                        <Link to="/" className={classes.grow}>
                            <Typography variant="h6" color="secondary" className={classes.grow}>
                                35mm
                        </Typography>
                        </Link>
                        <Link to='/login'>
                            <Button>
                                LOGIN
                        </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.drawerOpen} onClose={()=>this.setState({drawerOpen: false})}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={()=>this.setState({drawerOpen: false})}
                        onKeyDown={()=>this.setState({drawerOpen: false})}
                    >
                        <NavDrawer/>
                    </div>
                </Drawer>
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);