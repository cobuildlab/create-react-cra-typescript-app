import { useLocation, useNavigate } from 'react-router-dom';

import { Home as HomeIcon } from '@mui/icons-material';
import { Drawer as MUIDrawer, List, Toolbar } from '@mui/material';
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles';

import { ROUTES } from '../../../../constants';
import { SidebarMenuItem } from './SidebarMenuItem';

/**
 *
 * @param {Theme} theme - Mixin for to apply Styles to open.
 * @returns {CSSObject} - CSS Styles.
 */
const openedMixin = (theme: Theme): CSSObject => ({
  width: theme.mixins.drawer.maxWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

/**
 *
 * @param {Theme} theme - Mixin for to apply Styles to close.
 * @returns {CSSObject} - CSS Styles.
 */
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerContent = styled('div')({
  overflowY: 'auto',
  overflowX: 'hidden',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const Drawer = styled(MUIDrawer, {
  /**
   *
   * @param {PropertyKey} prop - Drawer prop.
   * @returns {boolean} - Flag If prop should forwarded.
   */
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: theme.mixins.drawer.maxWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

interface SidebarProps {
  open?: boolean;
}

/**
 * @param {SidebarProps} props - Sidebar props.
 * @returns Sidebar Component.
 */
export const Sidebar: React.FC<SidebarProps> = (props) => {
  const theme = useTheme();
  const { open } = props;
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar />
      <DrawerContent>
        <List>
          <SidebarMenuItem
            title="Home"
            onClick={() => navigate(ROUTES.HOME)}
            selected={location.pathname === ROUTES.HOME}
            icon={<HomeIcon style={{ color: theme.palette.primary.main }} />}
          />
        </List>
      </DrawerContent>
    </Drawer>
  );
};

Sidebar.defaultProps = {
  open: false,
};
