import { FC } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { EmployeeCardItemProps } from '@/components/employee/EmployeeCardItem.interface';
import { BaseText } from '@/components/common/base-text/BaseText';

export const EmployeeCardItem: FC<EmployeeCardItemProps> = (props) => {
  const { label, value } = props;

  return (
    <BaseView>
      <BaseText label={label} className={'font-bold italic'} />
      <BaseText label={value} className={'py-0'} />
    </BaseView>
  );
};
