import BaseView from '@/components/common/base-view/BaseView';
import { EmployeeList } from '@/components/employee/EmployeeList';
import { logger } from '../../logger';
import { Title } from '@/components/common/title/Title';

export default async function Home() {
  logger.info('Home Page called');

  return (
    <BaseView className={'w-full items-center p-4'}>
      <Title label={'Employees'} />
      <EmployeeList />
    </BaseView>
  );
}
