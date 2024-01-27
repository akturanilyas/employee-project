import BaseView from '@/components/common/base-view/BaseView';
import { BaseText } from '@/components/common/base-text/BaseText';

export const EmployeeTitle = () => (
  <BaseView className={'items-center p-4'}>
    <BaseView className={'border rounded-md px-2'}>
      <BaseText label={'Employees'} textClassName={'text-2xl'} />
    </BaseView>
  </BaseView>
);
