/* eslint-disable @typescript-eslint/ban-types */
import { USER_ROLES } from '../modules/session/session-model';
import { IconNames } from '../shared/components/icons/Icon';

type InternalRoutes<T> = {
  [P in keyof T]: Route<T[P]>;
};
export interface Route<T> {
  icon?: IconNames;
  path: `/${string}`;
  text: string;
  internalPaths: InternalRoutes<T>;
  rolePermission?: (keyof typeof USER_ROLES)[];
}

export type Routes<T> = {
  [P in keyof T]: Route<T[P]>;
};

/**
 * @param input - Input objets.
 * @returns Keys.
 */
export function getKeys<T>(input: T): (keyof T)[] {
  const keys = Object.keys(input) as (keyof T)[];
  return keys;
}
/**
 * @param parentPath - Path.
 * @param internalPaths - Paths.
 * @returns Paths.
 */
export function mapInternalPaths<T>(
  parentPath: `/${string}`,
  internalPaths: InternalRoutes<T>,
): InternalRoutes<T> {
  const mainKeys = getKeys(internalPaths);

  const result = mainKeys.reduce((prev, current) => {
    const route = { ...internalPaths[current] };

    const newPath = (parentPath + route.path) as `/${string}`;

    route.path = newPath;

    route.internalPaths = mapInternalPaths(newPath, route.internalPaths);

    return {
      ...prev,
      [current]: route,
    };
  }, internalPaths);

  return result;
}

/**
 * @param routes - Input routes.
 * @returns Output routes.
 */
export function createRoutes<T>(routes: Routes<T>): Routes<T> {
  return mapInternalPaths('' as `/${string}`, routes);
}

export const ROUTES = createRoutes({
  DASHBOARD: {
    path: '/dashboard',
    text: 'Dashboard',
    icon: 'house',
    internalPaths: {},
  },
});
