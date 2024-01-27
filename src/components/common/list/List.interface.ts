import { ReactNode } from 'react';

export interface ListProps<T> {
  className?: string;
  items: Array<
    T & {
      id: number;
    }
  >;
  listItemRender: ListItemRender<T>;
}

export type ListItemRender<T> = (item: T) => ReactNode;
