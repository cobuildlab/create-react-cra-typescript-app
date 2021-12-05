/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment, useState, useEffect } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  styled,
  Theme,
  CSSObject,
  ListItemText,
  Typography,
  CardMedia,
  Drawer,
} from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useLocation, Link } from 'react-router-dom';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { Icon } from './icons/Icon';
import { LAYOUT_SIZE } from '../css/theme';
import CoolriteLogo from '../assets/Coolrite-logo.png';
import { useUserSessionQuery } from '../types/generated';
import { useUserRoutes } from '../../modules/session/session-hooks';

/**
 * @param theme - Theme,.
 * @returns Css object.
 */
const activeMixin = (theme: Theme): CSSObject => ({
  color: theme.palette.accent.main,
  backgroundColor: '#fff',
  [theme.breakpoints.down('md')]: {
    color: theme.palette.primary.main,
    backgroundColor: '#969CBA99',
    width: '90%',
  },
});

const ListLinkItem = styled(ListItemIcon, {
  /**
   * @param prop - Props.
   * @returns Valude.
   */
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  width: 42,
  height: 42,
  minWidth: 42,
  borderRadius: 10,
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: theme.transitions.create(['backgroundColor', 'color'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  '&:hover': {
    ...activeMixin(theme),
  },
  ...(isActive && {
    ...activeMixin(theme),
  }),
  [theme.breakpoints.down('md')]: {
    color: theme.palette.primary.main,
    width: '90%',
    justifyContent: 'flex-start',
    ...(isActive && {
      ...activeMixin(theme),
    }),
  },
}));
/**
 * @returns Component.
 */
export function Sidebar(): JSX.Element {
  const location = useLocation();
  const routes = useUserRoutes();
  return (
    <>
      <MuiDrawer
        variant="permanent"
        sx={{
          display: ['none', 'flex'],
          width: LAYOUT_SIZE,
          flexShrink: 0,
          gridArea: 'sidebar',
          boxSizing: 'border-box',
          bgcolor: 'primary.main',
        }}
        PaperProps={{
          sx: {
            bgcolor: 'transparent',
            border: 'none',
          },
          elevation: 5,
        }}
      >
        <Box
          bgcolor="secondary.main"
          height={`${LAYOUT_SIZE}px`}
          minHeight={`${LAYOUT_SIZE}px`}
          width={`${LAYOUT_SIZE}px`}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img height="32" width="32" src={CoolriteLogo} alt="logo" />
        </Box>
        <List
          sx={{
            width: LAYOUT_SIZE,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {routes.map((route, index, arr) => (
            <Fragment key={route.path}>
              <ListItem
                component={Link}
                to={route.path}
                sx={{
                  color: '#fff',
                  width: LAYOUT_SIZE,
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '9px',
                }}
              >
                <ListLinkItem
                  isActive={location.pathname.indexOf(route.path) >= 0}
                >
                  {route.icon && <Icon name={route.icon} color="inherit" />}
                </ListLinkItem>
              </ListItem>
            </Fragment>
          ))}
        </List>
      </MuiDrawer>
    </>
  );
}
/**
 * @param root0 - Props.
 * @param root0.open - Prost text.
 * @param root0.close - Prost text.
 * @returns Component.
 */
// eslint-disable-next-line func-names
export const SidebarMobile = function ({
  open,
  close,
}: {
  open: boolean;
  close: React.MouseEventHandler<HTMLDivElement>;
}): JSX.Element {
  const location = useLocation();
  const { data } = useUserSessionQuery();
  const [opened, setOpened] = useState(true);
  useEffect(() => {
    if (open) {
      setOpened(true);
    } else {
      setOpened(false);
    }
  }, [open]);
  const routes = useUserRoutes();
  return (
    <Drawer anchor="left" open={opened} onClose={close}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{ width: 250, position: 'relative', height: '100%' }}
        role="presentation"
        onClick={close}
      >
        <Box>
          <Box
            display="flex"
            flexDirection="column"
            sx={{ width: '80%', margin: '20px auto' }}
          >
            {data && (
              <>
                <CardMedia
                  component="img"
                  sx={{
                    width: 80,
                    borderRadius: '50%',
                    border: '1.5px solid #1C387E',
                    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                  }}
                  image={
                    data.user.avatar?.shareUrl ||
                    'https://i.ibb.co/n8SSvBb/avatar.png'
                  }
                  alt="user"
                />
                <Typography variant="h6" color="primary">
                  {data.user.firstName || 'User'} {data.user.lastName}
                </Typography>
                <Typography variant="body1">{data.user.email}</Typography>
              </>
            )}
          </Box>
          <Box>
            <Divider />
            {routes.map((route) => (
              <List key={route.path}>
                <ListItem
                  component={Link}
                  to={route.path}
                  sx={{
                    color: '#fff',
                    width: '100%',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '9px',
                  }}
                >
                  <ListLinkItem
                    isActive={location.pathname.indexOf(route.path) >= 0}
                  >
                    {route.icon && (
                      <Icon
                        name={route.icon}
                        color="inherit"
                        sx={{ margin: '0 5px' }}
                      />
                    )}
                    <ListItemText
                      primary={route.text}
                      sx={{ '& .MuiTypography-root': { color: '#000' } }}
                    />
                  </ListLinkItem>
                </ListItem>
              </List>
            ))}
          </Box>
        </Box>
        <Box>
          <Divider />
          <ListItem
            component={Link}
            to="/logout"
            sx={{
              color: '#fff',
              width: '100%',
              padding: 0,
              margin: 0,
              marginTop: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '15px',
            }}
          >
            <ListLinkItem isActive={false}>
              <ListItemText
                primary="log out"
                sx={{ textAlign: 'right', paddingRight: '5px' }}
              />
              <PowerSettingsNewIcon />
            </ListLinkItem>
          </ListItem>
        </Box>
      </Box>
    </Drawer>
  );
};
