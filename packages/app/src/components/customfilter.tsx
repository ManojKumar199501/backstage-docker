import { Entity } from '@backstage/catalog-model';
import { EntityFilter } from '@backstage/plugin-catalog-react';
export class EnvironmentFilter implements EntityFilter {
  constructor(readonly values: string[]) {}
  filterEntity(entity: Entity): boolean {
    const env = entity.metadata.annotations?.['example.com/environment'];
    return env !== undefined && this.values.includes(env);
  }
}
