import { FC } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { BaseText } from '@/components/common/base-text/BaseText';
import Image from 'next/image';
import Link from 'next/link';
import { VoteEmployeeButton } from '@/components/employee/VoteEmployeeButton';
import { EmployeeListItemProps } from '@/components/employee/EmployeeListItem.interface';

export const EmployeeListItem: FC<EmployeeListItemProps> = (props) => {
  const { item } = props;

  return (
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
        <VoteEmployeeButton employeeId={item.id} />
      </BaseView>
    </Link>
  );
};