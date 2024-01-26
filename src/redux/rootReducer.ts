import { employeeApi } from '@/api/employeeApi';

export const reducer = {
  [employeeApi.reducerPath]: employeeApi.reducer,
};
