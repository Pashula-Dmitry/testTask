import {SelectData} from '@shared/types';

export const parsingDataForSelect = (arr: string[]): SelectData[] => {
  return arr.map((item) => ({value: item, label: item}));
};
