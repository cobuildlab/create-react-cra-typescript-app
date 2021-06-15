import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Typography,
  Box,
  Divider,
  Avatar,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Badge,
} from '@material-ui/core';
import clsx from 'clsx';

import {
  Menu as MenuIcon,
  MenuOpen as MenuOpenIcon,
  Notifications as NotificationsIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from '@material-ui/icons';

const Row: React.FC = ({ children, ...props }) => (
  <Box {...props} display="flex" flexWrap="no-wrap" alignItems="center">
    {children}
  </Box>
);

type StylesProps = {
  drawerWidth: number;
  minDrawerWidth: number;
};

const useStyles = makeStyles<Theme, StylesProps>((theme) =>
  createStyles({
    appBar: {
      height: 70,
      backgroundColor: '#F7F7F7',
      boxShadow: '20px 10px 25px 7px rgba(219,219,219,0.8)',
      color: '#B2B2B2',
      zIndex: theme.zIndex.drawer + 1,
      [theme.breakpoints.up('sm')]: {
        width: ({ minDrawerWidth }) => `calc(100% - ${minDrawerWidth + 10}px)`,
        marginLeft: (props) => props.drawerWidth,
      },
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      [theme.breakpoints.up('md')]: {
        marginLeft: (props) => props.drawerWidth,
        width: ({ drawerWidth }) => `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
    toolbar: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      display: 'flex',
      justifyContent: 'space-between',
    },
    title: {
      margin: 0,
      marginLeft: theme.spacing(1),
    },
    userText: {
      height: '100%',
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: '0 15px',
    },
    username: {
      color: theme.palette.common.black,
    },
    badge: () => {
      const size = 15;
      return {
        '& .MuiBadge-badge': {
          minWidth: size,
          width: size,
          height: size,
          maxHeight: size,
          fontSize: 10,
          top: 5,
          right: 2,
        },
      };
    },
  }),
);

interface TopBarProps {
  openDrawer: boolean;
  drawerWidth: number;
  minDrawerWidth: number;
  toggleDrawer: () => void;
}

export const Topbar: React.FC<TopBarProps> = ({
  drawerWidth,
  minDrawerWidth,
  openDrawer,
  toggleDrawer,
}) => {
  const classes = useStyles({ drawerWidth, minDrawerWidth });
  const { logout } = useAuth0();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openUserMenu = Boolean(anchorEl);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void =>
    setAnchorEl(event.currentTarget);

  const handleCloseUserMenu = (): void => setAnchorEl(null);

  const handleLogout = (): void =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <AppBar
      color="inherit"
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: openDrawer,
      })}>
      <Toolbar className={classes.toolbar}>
        <Row>
          <IconButton onClick={toggleDrawer} color="inherit">
            {openDrawer ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          <Typography className={classes.title}>Home</Typography>
        </Row>
        <Row>
          <IconButton>
            <Badge className={classes.badge} color="primary" badgeContent="+2">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Divider
            style={{ margin: '0 15px' }}
            orientation="vertical"
            flexItem
          />
          <Row>
            <Avatar />
            <Box className={classes.userText}>
              <Typography className={classes.username}>
                Wilson Carson
              </Typography>
              <Typography variant="caption">Administrador</Typography>
            </Box>
            <IconButton onClick={handleOpenUserMenu}>
              <ArrowDropDownIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              open={openUserMenu}
              onClose={handleCloseUserMenu}>
              <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Row>
        </Row>
      </Toolbar>
    </AppBar>
  );
};
