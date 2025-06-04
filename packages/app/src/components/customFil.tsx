import { DefaultEntityFilters } from '@backstage/plugin-catalog-react';
import { EnvironmentFilter } from './customfilter';
export type CustomFilters = DefaultEntityFilters & {
  environment?: EnvironmentFilter;
};
