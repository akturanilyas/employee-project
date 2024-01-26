import { api as generatedApi } from '@/api/generated';

export const employeeApi = generatedApi.enhanceEndpoints({
  endpoints: {
    MutationTest: {
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        queryFulfilled.then((value) => {
          dispatch(
            employeeApi.util.updateQueryData('Employee', undefined, (data) => ({
              employee: { ...data.employee, id: 'idont now', star: 4 },
            })),
          );
        });
      },
    },
  },
});

export const { useEmployeeQuery, useMutationTestMutation } = employeeApi;
