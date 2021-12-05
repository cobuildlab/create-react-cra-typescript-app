import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory, useLocation } from 'react-router-dom';
import { SidebarMobile } from './Sidebar';
import { ROUTES } from '../../routes/routes-model';

/**
 * @returns Component.
 */
export const Topbar: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = useState<boolean>(false);

  /**
   * @returns NavBarTitle.
   */
  const getTitle = (): string => {
    const title = Object.values(ROUTES).find(
      (i) => i.path.slice(0, 3) === location.pathname.slice(0, 3),
    );
    if (title) {
      return title.text;
    }
    return '404';
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          gridArea: 'topbar',
          position: 'initial',
          background: '#fff',
          boxShadow: 'none',
          display: 'flex',
          justifyContent: ['space-between', 'flex-end'],
          flexDirection: 'row',
          padding: '10px 0',
          color: 'icons.main',
        }}
      >
        <Toolbar
          sx={{
            display: ['none', 'flex'],
            maxHeight: '100%',
            background: '#fff',
            minHeight: {
              xs: 'auto', // theme.breakpoints.up('xs')
            },
            '&>*': {
              margin: '0 5px',
            },
          }}
        >
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Divider orientation="vertical" />
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => history.push('/logout')}
            color="inherit"
          >
            <ExitToAppOutlinedIcon />
          </IconButton>
        </Toolbar>
        <Toolbar
          sx={{
            maxHeight: '100%',
            background: '#fff',
            display: ['flex', 'none'],
            minHeight: {
              xs: 'auto', // theme.breakpoints.up('xs')
            },
          }}
        >
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="primary" variant="h6">
            {getTitle()}
          </Typography>
        </Toolbar>
      </AppBar>
      <SidebarMobile open={open} close={() => setOpen(false)} />
    </>
  );
};
