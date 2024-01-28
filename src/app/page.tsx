import BaseView from '@/components/common/base-view/BaseView';
import { EmployeeList } from '@/components/employee/EmployeeList';
import { Title } from '@/components/common/title/Title';

export default async function Home() {
  return (
    <BaseView className={'w-full items-center p-4 gap-4'}>
      <Title label={'Employees'} />
      <EmployeeList />
    </BaseView>
  );
}
