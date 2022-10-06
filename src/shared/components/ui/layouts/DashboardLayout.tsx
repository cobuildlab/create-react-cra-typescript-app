import { FC, PropsWithChildren, ReactNode } from 'react';
import { Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

import { AppBar } from './AppBar';
import { Sidebar } from './Sidebar/Sidebar';
import { useSidebar } from './Sidebar/sidebar-hooks';

const MainContent = styled('div')({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
});

const Main = styled('main')({
  flexGrow: 1,
});

const RootLayout = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
}));

/**
 * @param {PropsWithChildren} props - Props.
 * @param {ReactNode} props.children - Children.
 * @returns {JSX.Element} - Base layout for dashboard.
 */
export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  const [open, openSidebar, closeSidebar] = useSidebar();

  return (
    <RootLayout>
      <AppBar
        open={open}
        onCloseSidebar={closeSidebar}
        onOpenSidebar={openSidebar}
      />
      <Sidebar open={open} />
      <MainContent>
        <Toolbar />
        <Main>{children}</Main>
      </MainContent>
    </RootLayout>
  );
};
