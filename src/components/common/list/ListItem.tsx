import BaseView from '@/components/common/base-view/BaseView';
import { BaseText } from '@/components/common/base-text/BaseText';
import { ListItemProps } from '@/components/common/list/ListItem.interface';

export const ListItem = <T, >(props: ListItemProps<T>) => (
  <BaseView className={'items-center border'}>
    <BaseText label={'List item'} textClassName={'text-2xl'} />
  </BaseView>
);
