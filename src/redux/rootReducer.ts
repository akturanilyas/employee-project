import { employeeApi } from '@/api/employeeApi';
import { mainSlice } from '@/redux/slices/mainSlice';

export const reducer = {
  mainSlice: mainSlice.reducer,
  [employeeApi.reducerPath]: employeeApi.reducer,
};
