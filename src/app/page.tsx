import BaseView from '@/components/common/base-view/BaseView';
import { EmployeeTitle } from '@/components/employee/EmployeeTıtle';
import { EmployeeList } from '@/components/employee/EmployeeList';
import { reduxStore } from '@/redux/store';
import { employeeApi } from '@/api/employeeApi';
import { BaseText } from '@/components/common/base-text/BaseText';

async function getEmployees() {
  const data = await reduxStore.dispatch(employeeApi.endpoints.employees.initiate()).unwrap();

  return data;
}

export default async function Home() {
  const { employees } = await getEmployees();

  if (!employees) {
    // TODO Loading
    return <BaseText label={'loading'} />;
  }

  return (
    <BaseView className={'w-full bg-slate-800 items-center p-4'}>
      <EmployeeTitle />
      <EmployeeList employees={employees} />
    </BaseView>
  );
}
