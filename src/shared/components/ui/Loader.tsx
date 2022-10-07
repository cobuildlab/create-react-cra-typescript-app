import { Box, BoxProps, CircularProgress } from '@mui/material';

interface LoaderProps {
  fullPage?: boolean;
  centered?: boolean;
  size?: string;
}

/**
 * @param {LoaderProps} props - Props of Loader.
 * @returns {JSX.Element} - Main loader component.
 */
export const Loader: React.FC<LoaderProps> = (props) => {
  const boxProps: BoxProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  };

  if (props.fullPage) boxProps.height = '100vh';
  if (props.centered) boxProps.height = '100%';

  if (props.fullPage || props.centered) {
    return (
      <Box {...boxProps}>
        <CircularProgress size={props.size} />
      </Box>
    );
  }

  return <CircularProgress size={props.size} />;
};

Loader.defaultProps = {
  fullPage: false,
  centered: false,
  size: '5rem',
};
