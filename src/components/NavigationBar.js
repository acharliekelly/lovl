import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

// icons
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FinterprintIcon from '@material-ui/icons/Finterprint';
import HelpIcon from '@material-ui/icons/Help';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import LanguageIcon from '@material-ui/icons/Language';
import logo from '../images/lovl_logo.png';

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

class NavigationBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render () {
    const { auth, anchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleMenu}>English</MenuItem>
        <MenuItem onClick={this.handleMenu}>Espanol</MenuItem>
        <MenuItem onClick={this.handleMenu}>Francais</MenuItem>
        { /* add all languages */ }
      </Menu>
    );

    return (
      <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.logoButton} color="inherit" aria-label="Home">
              <img alt="Logo" src={logo} />
            </IconButton>
            <IconButton className={classes.buyCredits} color="inherit" aria-label="Shopping Cart">
              <ShoppingCartIcon />
              <Typography variant="h5">Buy Credits</Typography>
            </IconButton>

            {!auth && (
              // logged-out buttons
              <React.Fragment>
                <IconButton
                  onClick={this.handleMenu}
                  color="inherit"
                >
                    Login
                  <FinterprintIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={this.handleMenu}
                >
                    Sign Up
                  <PersonAddIcon />
                </IconButton>
              </React.Fragment>
            )}

            {auth && (
              // logged-in buttons
              <React.Fragment>
                <IconButton
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <MailIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={this.handleMenu}
                >
                  <NotificationsIcon />
                </IconButton>

                <IconButton
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>

                <IconButton onClick={this.handleMenu} color="inherit">
                  <i className="material-icons">exit_to_app</i>
                </IconButton>
                <IconButton color="inherit" onClick={this.handleMenu}>
                  <HelpIcon />
                </IconButton>
              </React.Fragment>
            )}
            <React.Fragment>
              <IconButton
                aria-owns={isMenuOpen ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <LanguageIcon />EN
              </IconButton>
              {renderMenu}
            </React.Fragment>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavigationBar);
