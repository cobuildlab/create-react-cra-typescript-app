import { Popover, PopoverProps } from '@mui/material';
import { useCallback, useState } from 'react';

/**
 * @param props - Props.
 * @param props.button - Button.
 * @param props.children - Children.
 * @param props.sx - Styles props.
 * @returns Component.
 */
export function Dropdown({
  button,
  children,
  sx,
  ...props
}: Omit<PopoverProps, 'open'> & {
  button: (props: {
    open: (element: HTMLElement) => void;
    close: () => void;
    toggle: (element: HTMLElement) => void;
  }) => React.ReactNode;
  children: React.ReactNode;
}): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = useCallback((element: HTMLElement) => {
    setAnchorEl(element);
  }, []);

  const close = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const toggle = useCallback((element: HTMLElement) => {
    setAnchorEl((prev) => (prev ? null : element));
  }, []);

  const isOpen = Boolean(anchorEl);

  return (
    <>
      {button && button({ open, close, toggle })}
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={close}
        PaperProps={{
          sx: {
            padding: 2,
            ...sx,
          },
        }}
        {...props}
      >
        {children}
      </Popover>
    </>
  );
}
