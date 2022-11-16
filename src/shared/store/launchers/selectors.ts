import {RootState} from '@store/store';

export const getLoading = (state: RootState) => state.launches.loading;
export const getTotal = (state: RootState) => state.launches.total;
export const getOffset = (state: RootState) => state.launches.offset;
export const getFilters = (state: RootState) => state.launches.filters;
export const getLaunches = (state: RootState) => state.launches.listLaunchers;
