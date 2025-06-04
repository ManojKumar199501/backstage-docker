import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const timePlugin = createPlugin({
  id: 'time',
  routes: {
    root: rootRouteRef,
  },
});

export const TimePage = timePlugin.provide(
  createRoutableExtension({
    name: 'TimePage',
    component: () =>
      import('./components/timecard').then(m => m.default),
    mountPoint: rootRouteRef,
  }),
);
