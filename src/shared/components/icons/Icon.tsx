import { SvgIconTypeMap } from '@mui/material';
import {
  SettingsOutlined,
  HomeOutlined,
  ExitToAppOutlined,
  NotificationsNoneOutlined,
} from '@mui/icons-material';

export type IconNames = 'gear' | 'house' | 'exit' | 'notification';

/**
 * @param root0 - Props.
 * @param root0.name - Name of the icon.
 * @returns {JSX.Element} - Icon component.
 */
export function Icon({
  name,
  ...rest
}: {
  name: IconNames;
} & SvgIconTypeMap['props']): JSX.Element {
  let icon;
  switch (name) {
    case 'gear':
      icon = <SettingsOutlined {...rest} />;
      break;
    case 'house':
      icon = <HomeOutlined {...rest} />;
      break;
      break;
    case 'exit':
      icon = <ExitToAppOutlined {...rest} />;
      break;
    case 'notification':
      icon = <NotificationsNoneOutlined {...rest} />;
      break;
    default:
      break;
  }
  if (!icon) {
    throw new Error('Not icon found');
  }
  return icon;
}
