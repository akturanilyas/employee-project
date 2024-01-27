import { api as generatedApi, EmployeeQuery, EmployeesQuery } from '@/api/generated';

export const employeeApi = generatedApi.enhanceEndpoints({
  endpoints: {
    increaseEmployeeStar: {
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        queryFulfilled.then((value) => {
          dispatch(
            employeeApi.util.updateQueryData('employees', undefined, (data: EmployeesQuery) => ({
              employees: data.employees
                ?.map((employee) => {
                  if (args.id === employee.id) {
                    return { ...employee, star: employee.star + 1 };
                  }

                  return employee;
                })
                .sort((current, next) => next.star - current.star),
            })),
          );

          dispatch(
            employeeApi.util.updateQueryData('employee', { id: args.id }, (data: EmployeeQuery) => {
              const { employee } = data;

              return {
                employee: { ...employee, star: employee.star + 1 },
              };
            }),
          );
        });
      },
    },
  },
});

export const { useIncreaseEmployeeStarMutation, useEmployeesQuery } = employeeApi;
