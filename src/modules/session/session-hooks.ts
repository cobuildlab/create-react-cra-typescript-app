import { ROUTES } from '../../routes/routes-model';
import { useUserSessionQuery } from '../../shared/types/generated';
import { RolesType, USER_ROLES } from './session-model';

/**
 * @param roleToCheck - Roles.
 * @param userRoles - User roles.
 * @returns Result.
 */
function check(
  roleToCheck: RolesType,
  userRoles: {
    __typename?: 'Role' | undefined;
    name: string;
  }[],
): boolean {
  const role = userRoles.find((item) => item.name === USER_ROLES[roleToCheck]);

  return Boolean(role);
}
/**
 * @param roles - Input roles.
 * @returns Booleas if the user has the roles.
 */
export function useUserHasRole(roles: RolesType | RolesType[]): boolean {
  const sessionState = useUserSessionQuery();

  if (!sessionState?.data) {
    return false;
  }

  const userRoles = sessionState.data.user.roles.items;

  return typeof roles === 'string'
    ? check(roles, userRoles)
    : roles.some((roleItem) => check(roleItem, userRoles));
}

/**
 * @returns Booleas if the user has the roles.
 */
export function useUserRoutes(): typeof ROUTES[keyof typeof ROUTES][] {
  const sessionState = useUserSessionQuery();

  if (!sessionState?.data) {
    return [];
  }

  const userRoles = sessionState.data.user.roles.items;

  return Object.values(ROUTES).filter((route) =>
    route.rolePermission
      ? route.rolePermission.some((role) => check(role, userRoles))
      : true,
  );
}
