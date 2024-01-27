import BaseView from '@/components/common/base-view/BaseView';
import { ListProps } from '@/components/common/list/List.interface';
import { twMerge } from 'tailwind-merge';

export const List = <T, >(props: ListProps<T>) => {
  const { items, listItemRender, className } = props;

  const classes = twMerge('items-center border', className);

  return (
    <BaseView className={classes}>
      {items.map((item, index) => (
        <BaseView key={index} className={'flex flex-row w-full py-2 px-1'}>
          <BaseView className={'w-full rounded-md border px-2'}>{listItemRender(item)}</BaseView>
        </BaseView>
      ))}
    </BaseView>
  );
};
