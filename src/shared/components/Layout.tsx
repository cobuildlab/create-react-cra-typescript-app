import React from 'react';
import Box from '@mui/material/Box';
import { Topbar } from './Topbar';
import { Sidebar } from './Sidebar';
import { LAYOUT_SIZE } from '../css/theme';

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
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: ['0 1fr', `${LAYOUT_SIZE}px 1fr`],
        gridTemplateRows: `${LAYOUT_SIZE}px 1fr`,
        gridTemplateAreas: `
        "sidebar topbar"
        "sidebar main"
      `,
        height: '100vh',
      }}
    >
      <Topbar />
      <Sidebar />
      <Box
        sx={{
          gridArea: 'main',
          padding: 3,
          bgcolor: 'surfaceOverlay.main',
          overflowY: 'auto',
          maxHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
