import BaseView from '@/components/common/base-view/BaseView';
import { EmployeeDetail } from '@/components/employee/EmployeeDetail';

export default async function Home(props: {
  params: {
    employee_id: string;
  };
}) {
  return (
    <BaseView className={'items-center p-4'}>
      <EmployeeDetail id={Number(props.params.employee_id)} />
    </BaseView>
  );
}
