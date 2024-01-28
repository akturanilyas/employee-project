import { FC } from 'react';
import { BaseText } from '@/components/common/base-text/BaseText';
import BaseView from '@/components/common/base-view/BaseView';
import { BsStarFill } from 'react-icons/bs';
import { EmployeeStarProps } from '@/components/employee/EmployeeStar.interface';

export const EmployeeStar: FC<EmployeeStarProps> = (props) => {
  const { count } = props;

  return (
    <BaseView className={'flex items-center px-4 flex-row relative justify-center align-middle'}>
      <BaseText label={count.toString()} textClassName={'text-white'} className={'font-bold text-base absolute'} />
      <BsStarFill size={50} className={'text-yellow-500'} />
    </BaseView>
  );
};
