'use client';

/* Core */
import { Provider } from 'react-redux';
import { reduxStore } from '@/redux/store';
import { PropsWithChildren } from 'react'; /* Instruments */

/* Instruments */

export const ReduxProvider = (props: PropsWithChildren) => <Provider store={reduxStore}>{props.children}</Provider>;
