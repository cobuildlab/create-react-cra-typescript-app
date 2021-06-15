import React, { useState } from 'react';
import { createStyles, makeStyles, Theme, Toolbar } from '@material-ui/core';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

const drawerWidth = 220;
const minDrawerWidth = 88;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: theme.palette.background.default,
      height: '100vh',
    },
    content: {
      flexGrow: 1,
      padding: `${theme.spacing(3)}px ${theme.spacing(5)}px`,
    },
  }),
);

/**
 * @param {object}props - Props.
 * @param {JSX.Element} props.children - Children to render.
  @returns {JSX.Element} - Layout component of the app.
 */
export function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();

  const toggleDrawer = (): void => setOpenDrawer((prevState) => !prevState);

  return (
    <div className={classes.root}>
      <Topbar
        openDrawer={openDrawer}
        drawerWidth={drawerWidth}
        minDrawerWidth={minDrawerWidth}
        toggleDrawer={toggleDrawer}
      />
      <Sidebar
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        drawerWidth={drawerWidth}
        minDrawerWidth={minDrawerWidth}
      />
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
}
