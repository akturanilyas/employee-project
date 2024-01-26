import { api as generatedApi } from '@/api/generated';

export const employeeApi = generatedApi.enhanceEndpoints({
  endpoints: {
    increaseEmployeeStar: {
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        queryFulfilled.then((value) => {
          /*
          Dispatch(
            employeeApi.util.updateQueryData('Employees', undefined, (data: EmployeesQuery) => ({
              employees: { ...data.employees, star: 4 },
            })),
          )
           */
        });
      },
    },
  },
});

export const { useIncreaseEmployeeStarMutation, useEmployeesQuery } = employeeApi;
