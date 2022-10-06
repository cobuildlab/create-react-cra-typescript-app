import { withAuthenticationRequired } from '@auth0/auth0-react';
import { FC, lazy, Suspense } from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { AuthView } from './modules/auth/AuthView';
import { AuthCallback } from './modules/auth/components/AuthCallback';
import { Logout } from './modules/auth/components/Logout';
import { ROUTES } from './shared/constants';
import { Loader } from './shared/components/ui/Loader';

export const DashboardLazyView = withAuthenticationRequired(
  lazy(() =>
    import('./modules/dashboard/DashboardView').then((module) => ({
      default: module.DashboardView,
    }))
  )
);

export const HomeLazyView = lazy(() =>
  import('./modules/home/HomeView').then((module) => ({
    default: module.HomeView,
  }))
);

/**
 * @returns Routes.
 */
export const Routes: FC = () => (
  <RouterRoutes>
    <Route path={ROUTES.AUTH} element={<AuthView />} />
    <Route path={ROUTES.AUTH_CALLBACK} element={<AuthCallback />} />
    <Route path={ROUTES.LOGOUT} element={<Logout />} />
    <Route
      path={ROUTES.HOME}
      element={
        <Suspense fallback={<Loader fullPage />}>
          <HomeLazyView />
        </Suspense>
      }
    />
    <Route
      path={ROUTES.DASHBOARD}
      element={
        <Suspense fallback={<Loader fullPage />}>
          <DashboardLazyView />
        </Suspense>
      }
    />
  </RouterRoutes>
);
