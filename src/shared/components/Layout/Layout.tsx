import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <Sidebar />
      <main className={classes.content}>{children}</main>
    </div>
  );
}
