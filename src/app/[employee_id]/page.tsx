import BaseView from '@/components/common/base-view/BaseView';
import { EmployeeDetail } from '@/components/employee/EmployeeDetail';
import { reduxStore } from '@/redux/store';
import { employeeApi } from '@/api/employeeApi';

async function getEmployee(id: number) {
  const data = await reduxStore.dispatch(employeeApi.endpoints.employee.initiate({ id })).unwrap();

  return data;
}

export default async function Home(props: {
  params: {
    employee_id: string;
  };
}) {
  const { employee } = await getEmployee(Number(props.params.employee_id));

  if (!employee) {
    return <></>;
  }

  return (
    <BaseView className={'items-center p-4'}>
      <EmployeeDetail employee={employee} />
    </BaseView>
  );
}
