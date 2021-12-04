import Snackbar from '@mui/material/Snackbar';
import {
  AlertProps,
  Alert as MuiAlert,
  AlertColor,
  Slide,
  SlideProps,
} from '@mui/material';
import {
  createStore,
  createStoreAction,
  useStore,
} from '@cobuildlab/react-simple-state';
import { forwardRef } from 'react';

/**
 * @param props - Props.
 * @returns Component.
 */
function SlideTransition(props: SlideProps): JSX.Element {
  return <Slide {...props} direction="up" />;
}
const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

export const snackbarStore = createStore<{
  open: boolean;
  message?: string;
  type?: `${AlertColor}`;
}>({
  initialValue: {
    open: false,
  },
});

const success: AlertColor = 'success';
const warning: AlertColor = 'warning';
const info: AlertColor = 'info';
const error: AlertColor = 'error';

export const snackbar: Record<AlertColor, (text: string) => void> = {
  success: createStoreAction(snackbarStore, (prev, message: string) => ({
    open: true,
    type: success,
    message,
  })),
  warning: createStoreAction(snackbarStore, (prev, message: string) => ({
    open: true,
    type: warning,
    message,
  })),
  info: createStoreAction(snackbarStore, (prev, message: string) => ({
    open: true,
    type: info,
    message,
  })),
  error: createStoreAction(snackbarStore, (prev, message: string) => ({
    open: true,
    type: error,
    message,
  })),
};

/**
 *
 */
export const close = createStoreAction(snackbarStore, (prev) => ({
  ...prev,
  open: false,
}));

/**
 * @returns Snackbar component.
 */
export function Snackbars(): JSX.Element {
  const { open, message, type } = useStore(snackbarStore);
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={close}
      TransitionComponent={SlideTransition}
    >
      <Alert onClose={close} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
}
