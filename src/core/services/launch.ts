import type {AxiosRequestConfig} from 'axios';
import HTTP from '@core/api';
import {Launchers} from '@shared/types';

class Launch {
  async getAll(url: string, config?: AxiosRequestConfig) {
    return await HTTP.get<Launchers>(url, config);
  }
}

export default new Launch();
