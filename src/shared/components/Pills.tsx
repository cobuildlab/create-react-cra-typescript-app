import { styled } from '@mui/material/styles';
import { theme as appTheme } from '../css/theme';

const StyledPill = styled('span')<{
  color: string;
}>(({ color, theme }) => ({
  background: color,
  color: '#fff',
  borderRadius: '10px',
  fontWeight: 'bold',
  padding: theme.spacing(1),
  fontsize: '12px',
  minWidth: 110,
  display: 'inline-block',
  [theme.breakpoints.down('md')]: {
    minWidth: '110px',
    textAlign: 'center',
  },
}));

const {
  text: textColor,
  secondary,
  variant,
  delete: deleteColor,
} = appTheme.palette;

const colors = [
  secondary.main,
  variant.main,
  deleteColor.main,
  textColor.primary,
] as const;

type Indices<T extends readonly unknown[]> = Exclude<
  Partial<T>['length'],
  T['length']
>;

export type PillsTypeProp =
  | Indices<typeof colors>
  | Exclude<keyof typeof colors, keyof []>;

/**
 * @param root0 - Props.
 * @param root0.text - Children text.
 * @param root0.type - Type.
 * @returns Component.
 */
export function Pill({
  text,
  type,
}: {
  text: string;
  type: PillsTypeProp;
}): JSX.Element {
  const color = colors[type];

  return <StyledPill color={color}>{text}</StyledPill>;
}
