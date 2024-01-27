import BaseView from '@/components/common/base-view/BaseView';
import { FC } from 'react';
import { EmployeeDetailProps } from '@/components/employee/EmployeeDetail.interface';
import { EmployeeCard } from '@/components/employee/EmployeeCard';
import { Title } from '@/components/common/title/Title';

export const EmployeeDetail: FC<EmployeeDetailProps> = (props) => {
  const { id } = props;

  return (
    <BaseView className={'items-center p-4 gap-4 w-full shadow-md'}>
      <Title label={'Employee Detail'} />
      <EmployeeCard id={id} />
    </BaseView>
  );
};
