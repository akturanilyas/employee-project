import { BaseText } from '@/components/common/base-text/BaseText';
import BaseView from '@/components/common/base-view/BaseView';
import { FC } from 'react';
import { EmployeeDetailProps } from '@/components/employee/EmployeeDetail.interface';

export const EmployeeDetail:FC<EmployeeDetailProps> = ({ employee }) => (
    <BaseView className={'items-center p-4'}>
      <BaseView className={'border rounded-md px-2'}>
        <BaseText label={'EmployeeDetail'} textClassName={'text-2xl'} />
      </BaseView>
      <BaseText label={employee?.first_name} />
    </BaseView>
  );
