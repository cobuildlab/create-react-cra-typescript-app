import { lazy } from 'react';

export const Dashboard = lazy(() =>
  import('../modules/dashboard/DashboradView').then((module) => ({
    default: module.Dashboard,
  })),
);
