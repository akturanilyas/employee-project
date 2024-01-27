'use client';

import { FC } from 'react';
import { EmployeeListProps } from '@/components/employee/EmployeeList.interface';
import BaseView from '@/components/common/base-view/BaseView';
import { List } from '@/components/common/list/List';
import { useEmployeesQuery } from '@/api/employeeApi';
import { Employee } from '@/api/generated';
import { BaseText } from '@/components/common/base-text/BaseText';
import Image from 'next/image';
import Link from 'next/link';

export const EmployeeList: FC<EmployeeListProps> = () => {
  const { data: employees } = useEmployeesQuery();

  const getListItem = (item: Employee) => (
    <Link href={`/${item.id}`}>
      <BaseView className={'flex flex-row w-full items-center'}>
        <BaseView className={'flex-row w-full justify-between items-center'}>
          <BaseView className={'flex-row w-full items-center'}>
            <Image
              className={'border rounded-full w-[50px] h-[50px]'}
              src={item.image}
              alt={item.first_name}
              width={50}
              height={50}
            />
            <BaseView className={'px-2 m-0'}>
              <BaseText label={`${item.first_name} ${item.last_name}`} />
              <BaseText label={item.email} />
            </BaseView>
          </BaseView>
          <BaseView className={'w-full items-center'}>
            <BaseText label={item.job} />
          </BaseView>
        </BaseView>
        <BaseText label={item.star.toString()} />
      </BaseView>
    </Link>
  );

  return (
    <BaseView className={'w-full items-center p-4 overflow-y-scroll h-[calc(100vh_-_10rem)]'}>
      <List<Employee> className={'w-full'} items={employees?.employees || []} listItemRender={getListItem} />
    </BaseView>
  );
};
