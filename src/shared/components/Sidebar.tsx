import React, { useState } from 'react';
import {
  createStyles,
  Drawer,
  makeStyles,
  Theme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
} from '@material-ui/core';
import {
  Home as HomeIcon,
  PeopleAlt as PeopleAltIcon,
  BlurCircular as BlurCircularIcon,
  Assignment as AssignmentIcon,
  SettingsOutlined as SettingsOutlinedIcon,
} from '@material-ui/icons';
import clsx from 'clsx';
import eNviewLogo from '../assets/images/eNView-logo.png';

const routes = [
  {
    icon: HomeIcon,
    text: 'Home',
  },
  {
    icon: PeopleAltIcon,
    text: 'people',
  },
  {
    icon: BlurCircularIcon,
    text: 'Blur Circular',
  },
  {
    icon: AssignmentIcon,
    text: 'Assigment',
  },
  {
    icon: SettingsOutlinedIcon,
    text: 'Settings',
  },
];

type StylesProps = {
  drawerWidth: number;
  minDrawerWidth: number;
};

const useStyles = makeStyles<Theme, StylesProps>((theme) =>
  createStyles({
    drawer: {
      width: (props) => props.drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerPaper: {
      padding: '15px 10px',
      height: '100%',
      backgroundColor: theme.palette.common.black,
    },
    drawerOpen: {
      width: (props) => props.drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: (props) => props.minDrawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: (props) => props.minDrawerWidth,
      },
    },
    topLogo: {
      height: 66,
      display: 'inline-block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.spacing(3),
    },
    listItem: {
      color: theme.palette.common.white,
      height: 56,
      borderRadius: 4,
      marginBottom: theme.spacing(1),
      '&.Mui-selected': {
        color: '#808080',
        backgroundColor: 'rgba(128, 128, 128, 0.64)',
        '& .MuiListItemIcon-root': {
          color: '#808080',
        },
      },
      '&:hover': {
        '&.Mui-selected': {
          color: '#808080',
          backgroundColor: 'rgba(128, 128, 128, 0.64)',
          '& .MuiListItemIcon-root': {
            color: '#808080',
          },
        },
      },
    },
    listItemIcon: {
      color: theme.palette.common.white,
      minWidth: 70,
    },
  }),
);

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  drawerWidth: number;
  minDrawerWidth: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  open,
  onClose,
  drawerWidth,
  minDrawerWidth,
}) => {
  const [selected, setSelected] = useState(0);
  const classes = useStyles({ drawerWidth, minDrawerWidth });

  const navItems = routes.map((item, i) => {
    const key = `route-${i + 1}`;
    const { icon: Icon, text } = item;
    return (
      <ListItem
        key={key}
        className={classes.listItem}
        button
        selected={selected === i}
        onClick={() => setSelected(i)}>
        <ListItemIcon className={classes.listItemIcon}>
          <Icon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    );
  });

  const content = (
    <>
      <img className={classes.topLogo} src={eNviewLogo} alt="eNView logo" />
      <List component="nav">{navItems}</List>
    </>
  );

  return (
    <>
      <Hidden xsDown>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx(classes.drawerPaper, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}>
          {content}
        </Drawer>
      </Hidden>
      <Hidden smUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={onClose}
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};
