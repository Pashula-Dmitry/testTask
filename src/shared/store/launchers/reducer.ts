import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Filters, Launchers, Launcher} from '@shared/types';
import {fetchLaunches, fetchDetailsLaunch} from './actions';
import {LIMIT} from '@shared/constants';

export type FiltersCut = Omit<Filters, 'limit' | 'offset' | 'withFilters'>;

export interface LaunchersState {
  listLaunchers: Launchers;
  detailsLauncher: Launcher;
  loading: boolean;
  status: number;
  limit: number;
  offset: number;
  total: number;
  filters: FiltersCut;
}

const initialState: LaunchersState = {
  listLaunchers: [],
  detailsLauncher: null,
  loading: false,
  status: -1,
  limit: LIMIT,
  offset: 0,
  total: 0,
  filters: {
    orbit: '',
    launch_success: null,
    rocket_name: '',
  },
};

export const launchersSlice = createSlice({
  name: 'launchers',
  initialState,
  reducers: {
    incrementOffset(state, action: PayloadAction<{total: number; offset: number}>) {
      state.offset = action.payload.offset;
      state.total = action.payload.total;
    },

    updateFilters(state, action: PayloadAction<Partial<FiltersCut> & {total?: number}>) {
      state.filters.orbit = action.payload.orbit ?? initialState.filters.orbit;
      state.filters.rocket_name = action.payload.rocket_name ?? initialState.filters.rocket_name;
      state.filters.launch_success = action.payload.launch_success ?? initialState.filters.launch_success;

      state.offset = initialState.offset;
      state.total = action.payload.total || initialState.total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLaunches.fulfilled, (state, action) => {
        state.loading = false;
        state.listLaunchers = action.payload.data;
      })
      .addCase(fetchLaunches.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLaunches.rejected, (state) => {
        state.loading = false;
      })

      .addCase(fetchDetailsLaunch.fulfilled, (state, action) => {
        state.loading = false;
        state.detailsLauncher = action.payload;
      })
      .addCase(fetchDetailsLaunch.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDetailsLaunch.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {incrementOffset, updateFilters} = launchersSlice.actions;
export default launchersSlice.reducer;
