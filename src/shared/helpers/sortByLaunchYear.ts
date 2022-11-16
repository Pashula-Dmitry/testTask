import {Launchers} from '@shared/types';

export const sortByLaunchYear = (arr: Launchers): Launchers => {

  return arr.sort((a, b) => {
    if (+a.launch_year < +b.launch_year) {
      return 1;
    }

    if (+a.launch_year > +b.launch_year) {
      return -1;
    }

    if (+a.launch_year === +b.launch_year) {
      return 0;
    }
  });
};
