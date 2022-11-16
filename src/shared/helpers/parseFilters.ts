import {FiltersCut} from '@store/launchers/reducer';
import {Filters} from '@shared/types';

export const parseFilters = (filters: FiltersCut, condition: boolean) => {
  const params: Omit<Filters, 'sort'> = {};

  if (condition) {
    filters.rocket_name && (params.rocket_name = filters.rocket_name);
    filters.orbit && (params.orbit = filters.orbit);
    ((filters.launch_success === true) || (filters.launch_success === false)) && (params.launch_success = filters.launch_success);
  }

  return params;
};
