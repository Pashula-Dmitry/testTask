// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import {useDispatch} from 'react-redux';
import type {AppDispatch} from '@store/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
