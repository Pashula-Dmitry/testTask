import {createAsyncThunk} from '@reduxjs/toolkit';
import launchAPI from '@core/services/launch';
import {incrementOffset, updateFilters} from './reducer';
import {Filters} from '@shared/types';
import {RootState} from '@store/store';

export const fetchLaunches = createAsyncThunk(
  'launchers/fetchLaunchers',
  async (params: Filters, thunkAPI) => {
    const {
      launch_success: isLaunchSuccesParam = null,
      rocket_name: rocketNameParam = '',
      orbit: orbitParam = '',
    } = params;

    try {
      const response = await launchAPI.getAll(
        `${process.env.REACT_APP_API}launches`,
        {
          params,
        },
      );

      const total = parseInt(response.headers['spacex-api-count']);
      thunkAPI.dispatch(incrementOffset({total, offset: params.offset}));

      const {
        listLaunchers,
        filters: {orbit, rocket_name, launch_success},
      } = (thunkAPI.getState() as RootState).launches;
      const didChangeAnyFilter =
        launch_success !== isLaunchSuccesParam ||
        orbit !== orbitParam ||
        rocket_name !== rocketNameParam;

      if (didChangeAnyFilter) {
        thunkAPI.dispatch(
          updateFilters({
            rocket_name: rocketNameParam || rocket_name,
            orbit: orbitParam || orbit,
            launch_success: isLaunchSuccesParam || launch_success,
            total,
          }),
        );

        return {data: response.data};
      }

      return {data: [...listLaunchers, ...response.data]};
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
