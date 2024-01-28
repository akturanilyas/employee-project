'use client';

import { FC } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { EmployeeCardProps } from '@/components/employee/EmployeeCard.interface';
import { useEmployeeQuery } from '@/api/generated';
import { BaseImage } from '@/components/common/base-image/BaseImage';
import { EmployeeCardItem } from '@/components/employee/EmployeeCardItem';
import { EmployeeStar } from '@/components/employee/EmployeeStar';

export const EmployeeCard: FC<EmployeeCardProps> = (props) => {
  const { id } = props;

  const { data: employeeQuery } = useEmployeeQuery({ id });
  const { employee } = employeeQuery || {};

  return (
    <>
      {employee && (
        <BaseView
          className={'flex flex-row gap-2 h-full border rounded-md w-full items-center justify-between shadow-md'}
        >
          <BaseView className={'flex flex-col flex-1 sm:flex-row md:items-center sm:items-start h-full'}>
            <BaseView className={'p-4 sm:flex-col flex-row justify-between h-full gap-4'}>
              <BaseImage
                className={'rounded-full border'}
                width={100}
                height={100}
                src={employee.image}
                alt={employee.first_name}
              />
              <EmployeeStar count={employee.star} />
            </BaseView>
            <BaseView className={'p-4'}>
              <EmployeeCardItem label={'Name'} value={`${employee.first_name} ${employee.last_name}`} />
              <EmployeeCardItem label={'Job'} value={employee.job} />
              <EmployeeCardItem label={'Email'} value={employee.email} />
              <EmployeeCardItem label={'Address'} value={employee.address} />
              <EmployeeCardItem label={'Phone'} value={employee.phone} />
            </BaseView>
          </BaseView>
        </BaseView>
      )}
    </>
  );
};
