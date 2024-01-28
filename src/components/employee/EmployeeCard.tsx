'use client';

import { FC } from 'react';
import { BaseText } from '@/components/common/base-text/BaseText';
import BaseView from '@/components/common/base-view/BaseView';
import { EmployeeCardProps } from '@/components/employee/EmployeeCard.interface';
import { useEmployeeQuery } from '@/api/generated';
import { BaseImage } from '@/components/common/base-image/BaseImage';
import { BsStarFill } from 'react-icons/bs';

export const EmployeeCard: FC<EmployeeCardProps> = (props) => {
  const { id } = props;

  const { data: employeeQuery } = useEmployeeQuery({ id });
  const { employee } = employeeQuery || {};

  return (
    <>
      {employee && (
        <BaseView className={'flex flex-row gap-2 h-full border w-full items-center justify-between shadow-md'}>
          <BaseView className={'flex flex-col flex-1 sm:flex-row items-center'}>
            <BaseView className={'p-4'}>
              <BaseImage
                className={'rounded-full border'}
                width={100}
                height={100}
                src={employee.image}
                alt={employee.first_name}
              />
            </BaseView>
            <BaseView className={'px-4'}>
              <BaseText label={`${employee.first_name} ${employee.last_name}`} />
              <BaseText label={employee.job} />
              <BaseText label={employee.email} />
              <BaseText label={employee.address} />
              <BaseText label={employee.phone} />
            </BaseView>
          </BaseView>
          <BaseView className={'flex flex-row items-center px-4'}>
            <BaseText label={employee.star.toString()} className={'text-yellow-500 font-bold text-lg'} />
            <BsStarFill size={50} className={'text-yellow-500'} />
          </BaseView>
        </BaseView>
      )}
    </>
  );
};
