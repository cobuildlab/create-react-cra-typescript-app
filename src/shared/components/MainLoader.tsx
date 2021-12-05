import { CircularProgress, Typography, Box } from '@mui/material';

/**
 * @param root0 - Props.
 * @param root0.text - Prost text.
 * @returns {JSX.Element} - Main loader component.
 */
export function MainLoader({ text }: { text?: string }): JSX.Element {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {text && (
        <Typography variant="body1" gutterBottom>
          {text}
        </Typography>
      )}
      <CircularProgress size="5rem" />
    </Box>
  );
}
