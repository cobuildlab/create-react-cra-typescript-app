import { Route, RouteProps, RouteChildrenProps, match } from 'react-router-dom';
import React from 'react';
import { RolesType } from '../modules/session/session-model';
import { useUserHasRole } from '../modules/session/session-hooks';

/**
 * @param root0 - Props.
 * @param root0.children - Children.
 * @returns Route component.
 */
export function RoleRoute({
  children,
  ...rest
}: RouteProps & {
  roles: RolesType[];
}): JSX.Element {
  /**
   * @param prop - Prop.
   * @returns Render component.
   */
  const render = (prop: RouteChildrenProps): JSX.Element | null => {
    if (children) {
      return typeof children === 'function' ? children(prop) : children;
    }
    if (rest.component) {
      const Component = rest.component;
      return (
        <Component
          history={prop.history}
          location={prop.location}
          match={prop.match as match}
        />
      );
    }
    return null;
  };
  const hasRole = useUserHasRole(rest.roles);
  return (
    <Route {...rest}>
      {(prop) =>
        hasRole ? (
          render(prop)
        ) : (
          <>You don&lsquo;t have permission to view this page </>
        )
      }
    </Route>
  );
}
