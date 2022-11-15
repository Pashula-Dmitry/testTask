import {createAsyncThunk} from '@reduxjs/toolkit';
import launchAPI from '@core/services/launch';
import {} from 'axios';
import {incrementOffset} from './reducer';
import {Filters} from '@shared/types';

export const fetchLaunches = createAsyncThunk(
  'launchers/fetchLaunchers',
  async (params: Filters, thunkAPI) => {
    const {withFilters, ...othersParams} = params;

    try {
      const response = await launchAPI.getAll(
        `${process.env.REACT_APP_API}launches`,
        {
          params: othersParams,
        },
      );

      if (withFilters) {
        return {data: response.data, withFilters};
      }

      const total = +response.headers['spacex-api-count'] ?? 0;

      thunkAPI.dispatch(incrementOffset({total, offset: params.offset}));

      return {data: response.data};
    } catch (err) {
      thunkAPI.rejectWithValue(err);
    }
  },
);

export const fetchDetailsLaunch = createAsyncThunk(
  'launchers/fetchDetailsLaunch',
  async (id: number, thunkAPI) => {
    try {
      const response = await launchAPI.getAll(
        `${process.env.REACT_APP_API}launches`,
        {
          params: {
            flight_number: id,
          },
        },
      );

      return response.data[0];
    } catch (err) {
      thunkAPI.rejectWithValue(err);
    }
  },
);
