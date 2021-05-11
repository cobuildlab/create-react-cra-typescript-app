import React from 'react';
import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const Topbar: React.FC = () => {
  const classes = useStyles();
  const { logout } = useAuth0();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleLogout = (): void =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap className={classes.title}>
          React App
        </Typography>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit">
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};
