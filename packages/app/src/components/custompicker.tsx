import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@material-ui/core';
import { useEntityList } from '@backstage/plugin-catalog-react';
import { EnvironmentFilter } from './customfilter';
import { CustomFilters } from './customFil';
export const EnvironmentPicker = () => {
  const {
    filters: { environment },
    updateFilters,
  } = useEntityList<CustomFilters>();
  const toggle = (value: string) => {
    const current = environment?.values ?? [];
    const updated = current.includes(value)
      ? current.filter(t => t !== value)
      : [...current, value];
    updateFilters({
      environment: updated.length ? new EnvironmentFilter(updated) : undefined,
    });
  };
  const envOptions = ['dev', 'qa', 'prod'];
  return (
    <FormControl component="fieldset">
      <Typography variant="button">Environment</Typography>
      <FormGroup>
        {envOptions.map(env => (
          <FormControlLabel
            key={env}
            control={
              <Checkbox
                checked={environment?.values.includes(env) ?? false}
                onChange={() => toggle(env)}
              />
            }
            label={env.toUpperCase()}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};
