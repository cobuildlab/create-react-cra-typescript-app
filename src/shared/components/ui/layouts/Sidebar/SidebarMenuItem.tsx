import {
  Badge,
  ListItem,
  ListItemButton as MuiListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const ListItemButton = styled(MuiListItemButton)<ListItemButtonProps>(
  ({ theme }) => ({
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
    '&.Mui-selected': {
      backgroundColor: theme.palette.background.default,
      '&:before': {
        content: '""',
        position: 'absolute',
        width: '5px',
        height: '100%',
        backgroundColor: theme.palette.primary.main,
        top: '0',
        left: '.5px',
      },
      '&.Mui-selected .MuiListItemText-root': {
        color: theme.palette.primary.main,
      },
    },
  })
);

type SidebarMenuItemProps = {
  title: string;
  icon: React.ReactNode;
  count?: number;
  onClick?: () => void;
  selected?: boolean;
};

/**
 *
 * @param {SidebarMenuItemProps} props - Props.
 * @param {string} props.title - Title of menu item.
 * @returns {JSX.Element} - Sidebar Menu Item.
 */
export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  title,
  icon,
  count,
  onClick,
  selected,
}) => {
  const theme = useTheme();

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClick} selected={selected}>
        <ListItemIcon>
          <Badge color="error" badgeContent={count}>
            {icon}
          </Badge>
        </ListItemIcon>
        <ListItemText
          style={{ color: theme.palette.primary.main }}
          primary={title}
        />
      </ListItemButton>
    </ListItem>
  );
};
