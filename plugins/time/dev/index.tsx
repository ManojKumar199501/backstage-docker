import { createDevApp } from '@backstage/dev-utils';
import { timePlugin, TimePage } from '../src/plugin';

createDevApp()
  .registerPlugin(timePlugin)
  .addPage({
    element: <TimePage />,
    title: 'Root Page',
    path: '/time',
  })
  .render();
