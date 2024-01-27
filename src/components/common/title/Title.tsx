import { BaseText } from '@/components/common/base-text/BaseText';
import BaseView from '@/components/common/base-view/BaseView';
import { FC } from 'react';
import { TitleProps } from '@/components/common/title/Title.interface';

export const Title: FC<TitleProps> = ({ label }) => (
  <BaseView className={'border rounded-md px-2 w-full'}>
    <BaseText label={label} className={'justify-center'} textClassName={'text-2xl'} />
  </BaseView>
);
