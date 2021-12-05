import { Box, Paper, Typography } from '@mui/material';
import { styled, SxProps, Theme } from '@mui/system';
import { FormEventHandler } from 'react';
/**
 * @param root0 - Props.
 * @param root0.children - Childer.
 * @param root0.relative - Relative.
 * @returns Component.
 */
export function ListViewConatiner({
  children,
  relative,
}: {
  children: React.ReactNode;
  relative?: boolean;
}): JSX.Element {
  return (
    <Box
      display="grid"
      rowGap={2}
      gridTemplateColumns="100%"
      gridTemplateRows="auto auto 1fr"
      height="100%"
      sx={{
        position: relative ? 'relative' : 'initial',
      }}
    >
      {children}
    </Box>
  );
}
/**
 * @param root0 - Props.
 * @param root0.children - Children.
 * @param root0.title  - Title.
 * @param root0.subtitle - Subtitle.
 * @param root0.sx - Material ui sx prop.
 * @returns Component.
 */
export function FormViewConatiner({
  children,
  title,
  subtitle,
  sx,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  sx?: SxProps<Theme>;
}): JSX.Element {
  const styleProps = sx ?? {};

  return (
    <>
      <Box mb={2}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{subtitle}</Typography>
      </Box>
      <Paper
        variant="card"
        sx={{
          maxHeight: ['none', '100%'],
          height: ['none', '100%'],
          width: ['100%', 'auto'],
          paddingLeft: {
            xs: '15px',
            md: '7%',
          },
          paddingRight: {
            xs: '15px',
            md: '7%',
          },
          overflowY: ['visible', 'auto'],
          ...styleProps,
        }}
      >
        {children}
      </Paper>
    </>
  );
}

const StyledImg = styled('img')(({ theme }) => ({
  objectFit: 'contain',
  display: 'block',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    width: '100%',
  },
}));
/**
 * @param root0 - Props.
 * @param root0.children - Children.
 * @param root0.imagePath - Logo.
 * @param root0.alt - Alt for image.
 * @param root0.onSubmit - Form submit.
 * @returns Component.
 */
export function FormImageContainer({
  children,
  imagePath,
  alt,
  onSubmit,
}: {
  children: React.ReactNode;
  imagePath: string;
  alt?: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}): JSX.Element {
  return (
    <>
      <Box
        sx={{
          overflowY: 'visible',
          display: 'grid',
          gridTemplateColumns: ['100%', '1fr 1fr'],
          /**
           * @param theme - Theme.
           * @returns Gap.
           */
          columnGap: (theme) => theme.spacing(10),
          height: ['auto', 'auto', '100%'],
          width: ['100%', 'auto', 'auto'],
        }}
      >
        <Box
          sx={{
            display: 'grid',
            justifyContent: 'center',
            height: ['auto', 'auto', '100%'],
            width: ['100%', 'auto', 'auto'],
            /**
             * @param theme - Theme.
             * @returns Padding.
             */
            padding: (theme) => `${theme.spacing(2)} 0`,
          }}
        >
          <StyledImg src={imagePath} alt={alt ?? 'logo'} />
        </Box>
        <Box
          component="form"
          sx={{
            maxHeight: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignSelf: 'start',
            /**
             * @param theme - Theme.
             * @returns Gap.
             */
            columnGap: (theme) => theme.spacing(2),
            /**
             * @param theme - Theme.
             * @returns Gap.
             */
            rowGap: (theme) => theme.spacing(2),
          }}
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
