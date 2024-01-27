'use client';

import { FC } from 'react';
import { EmployeeListProps } from '@/components/employee/EmployeeList.interface';
import BaseView from '@/components/common/base-view/BaseView';
import { List } from '@/components/common/list/List';
import { useEmployeesQuery } from '@/api/employeeApi';
import { EmployeeList as EmployeeListType } from '@/api/generated';
import { EmployeeListItem } from '@/components/employee/EmployeeListItem';

export const EmployeeList: FC<EmployeeListProps> = (props) => {
  const { data: employeesData } = useEmployeesQuery();

  const getListItem = (item: EmployeeListType) => <EmployeeListItem item={item} />;

  return (
    <BaseView className={'w-full items-center py-2 overflow-y-scroll h-[calc(100vh_-_10rem)]'}>
      <List<EmployeeListType>
        className={'w-full'}
        items={employeesData?.employees || []}
        listItemRender={getListItem}
      />
    </BaseView>
  );
};
