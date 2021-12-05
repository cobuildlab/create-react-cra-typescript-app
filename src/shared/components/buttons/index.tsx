import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const LinkBehavior = forwardRef<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  Omit<LinkProps, 'to'> & { href: LinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;

  // Map href (MUI) -> to (react-router)
  return <Link ref={ref} to={href} {...other} />;
});
