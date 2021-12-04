export const USER_ROLES = {
  FIELDWORKER: 'App Fieldworker',
  ADMIN: 'App Admin',
} as const;

export type RolesType = keyof typeof USER_ROLES;
