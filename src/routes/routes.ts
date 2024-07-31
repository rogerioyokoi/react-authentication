import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { ForgotPassword, Login, ResetPassword, SecondFactor } from '@/components/pages';
import { SplitTemplate } from '@/components/templates';

/**
 * Enumeration of route IDs for navigation.
 */
export enum ROUTES_NAV_IDS {
  /** Home route ID */
  LOGIN = '/auth/login',
  FORGOT_PASSWORD = '/auth/forgot-password',
  SECOND_FACTOR = '/auth/second-factor',
  RESET_PASSWORD = '/auth/reset-password',
}

export const authRoutes: RouteObject[] = [
  {
    path: '/',
    Component: SplitTemplate,
    children: [
      {
        id: ROUTES_NAV_IDS.LOGIN,
        path: '/',
        Component: Login,
      },
      {
        id: ROUTES_NAV_IDS.FORGOT_PASSWORD,
        path: '/esqueci-senha',
        Component: ForgotPassword,
      },
      {
        id: ROUTES_NAV_IDS.SECOND_FACTOR,
        path: '/segundo-fator',
        Component: SecondFactor,
      },
      {
        id: ROUTES_NAV_IDS.RESET_PASSWORD,
        path: '/atualizar-senhar',
        Component: ResetPassword,
      },
    ],
  },
];

/**
 * Creates a browser router using the defined routes.
 */
export const router = createBrowserRouter(authRoutes);
