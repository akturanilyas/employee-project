'use client';

/* Core */
import { Provider } from 'react-redux';
import { reduxStore } from '@/redux/store';

/* Instruments */

export const ReduxProvider = (props: React.PropsWithChildren) => (
  <Provider store={reduxStore}>{props.children}</Provider>
);
