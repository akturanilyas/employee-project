import BaseView from '@/components/common/base-view/BaseView';
import { ListProps } from '@/components/common/list/List.interface';
import { twMerge } from 'tailwind-merge';

export const List = <T, >(props: ListProps<T>) => {
  const { items, listItemRender, className } = props;

  const classes = twMerge('items-center px-2', className);

  return (
    <BaseView className={classes}>
      {items.map((item, index) => (
        <BaseView key={index} className={'flex flex-row w-full py-2 px-1'}>
          <BaseView className={'w-full rounded-md border'}>{listItemRender(item)}</BaseView>
        </BaseView>
      ))}
    </BaseView>
  );
};
