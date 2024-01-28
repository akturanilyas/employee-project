'use client';

import { FC } from 'react';
import { BaseText } from '@/components/common/base-text/BaseText';
import BaseView from '@/components/common/base-view/BaseView';
import { EmployeeCardProps } from '@/components/employee/EmployeeCard.interface';
import { useEmployeeQuery } from '@/api/generated';
import { BaseImage } from '@/components/common/base-image/BaseImage';
import { BsStarFill } from 'react-icons/bs';
import { EmployeeCardItem } from '@/components/employee/EmployeeCardItem';

export const EmployeeCard: FC<EmployeeCardProps> = (props) => {
  const { id } = props;

  const { data: employeeQuery } = useEmployeeQuery({ id });
  const { employee } = employeeQuery || {};

  return (
    <>
      {employee && (
        <BaseView className={'flex flex-row gap-2 h-full border w-full items-center justify-between shadow-md'}>
          <BaseView className={'flex flex-col flex-1 sm:flex-row md:items-center sm:items-start h-full'}>
            <BaseView className={'p-4 sm:flex-col flex-row justify-between h-full gap-4'}>
              <BaseImage
                className={'rounded-full border'}
                width={100}
                height={100}
                src={employee.image}
                alt={employee.first_name}
              />
              <BaseView className={'flex items-center px-4 flex-row relative justify-center align-middle'}>
                <BaseText
                  label={employee.star.toString()}
                  textClassName={'text-white'}
                  className={'font-bold text-lg absolute'}
                />
                <BsStarFill size={50} className={'text-yellow-500'} />
              </BaseView>
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
