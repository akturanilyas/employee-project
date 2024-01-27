import BaseView from '@/components/common/base-view/BaseView';
import { EmployeeTitle } from '@/components/employee/EmployeeTıtle';
import { EmployeeList } from '@/components/employee/EmployeeList';

export default function Home() {
  return (
    <BaseView className={'w-full bg-slate-800 items-center p-4'}>
      <EmployeeTitle />
      <EmployeeList />
    </BaseView>
  );
}
