import { FC } from 'react';
import BaseView from '@/components/common/base-view/BaseView';
import { BaseText } from '@/components/common/base-text/BaseText';
import Image from 'next/image';
import Link from 'next/link';
import { VoteEmployeeButton } from '@/components/employee/VoteEmployeeButton';
import { EmployeeListItemProps } from '@/components/employee/EmployeeListItem.interface';
import { BsStarFill } from 'react-icons/bs';

export const EmployeeListItem: FC<EmployeeListItemProps> = (props) => {
  const { item } = props;

  return (
    <Link href={`/${item.id}`} className={'w-full'}>
      <BaseView className={'flex md:flex-col lg:flex-row w-full items-center px-2 rounded-md justify-between'}>
        <BaseView className={'flex-row w-full'}>
          <BaseView className={'lg:flex-row md:flex-col w-full justify-between items-center'}>
            <BaseView className={'flex-row w-full items-center align-middle'}>
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
            <BaseView className={'w-full items-start lg:items-center pl-14 lg:p-0'}>
              <BaseText label={item.job} />
            </BaseView>
          </BaseView>
          <BaseView className={'flex flex-row items-center'}>
            <BsStarFill className={'text-yellow-400'} />
            <BaseText label={item.star.toString()} />
          </BaseView>
        </BaseView>
        <VoteEmployeeButton className={'w-full lg:w-fit'} employeeId={item.id} />
      </BaseView>
    </Link>
  );
};
