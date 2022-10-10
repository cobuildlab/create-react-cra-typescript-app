import { FC } from 'react';
import { Mail as MailIcon, Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar as MUIAppBar,
  AppBarProps as MUIAppBarProps,
  Badge,
  IconButton as MUIIconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { FillSpace } from '../common/FillSpace';

const IconButton = styled(MUIIconButton)({ color: 'inherit' });
const MenuIconButton = styled(MUIIconButton)(({ theme }) => ({
  color: 'inherit',
  marginRight: theme.spacing(2),
}));
const WrapperActionsRight = styled('div')({});

interface MUIAppBarStyledProps extends MUIAppBarProps {
  open?: boolean;
}

const MUIAppBarStyled = styled(MUIAppBar, {
  shouldForwardProp: (prop) => prop !== 'open', // eslint-disable-line jsdoc/require-jsdoc
})<MUIAppBarStyledProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(!open && {
    width: `calc(100% - ${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.spacing(8)} + 1px)`,
    },
  }),
  ...(open && {
    marginLeft: theme.mixins.drawer.maxWidth,
    width: `calc(100% - ${theme.mixins.drawer.maxWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

type AppBarProps = {
  open: boolean;
  onOpenSidebar: () => void;
  onCloseSidebar: () => void;
};

/**
 * @param {AppBarProps} props - Props.
 * @param {boolean} props.open - Flag showing if sidebar is opened.
 * @param {() => void} props.onOpenSidebar - OpenSidebar.
 * @returns {JSX.Element} - Main App bar.
 */
export const AppBar: FC<AppBarProps> = ({
  open,
  onOpenSidebar,
  onCloseSidebar,
}) => (
  <MUIAppBarStyled position="fixed" open={open}>
    <Toolbar>
      <MenuIconButton
        size="large"
        edge="start"
        aria-label="open drawer"
        onClick={open ? onCloseSidebar : onOpenSidebar}
      >
        <MenuIcon />
      </MenuIconButton>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        DASHBOARD
      </Typography>
      <FillSpace />
      <WrapperActionsRight sx={{ display: { xs: 'none', md: 'flex' } }}>
        <IconButton size="large" aria-label="Show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
      </WrapperActionsRight>
    </Toolbar>
  </MUIAppBarStyled>
);
