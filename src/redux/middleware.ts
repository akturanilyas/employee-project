/* Core */
import { createLogger } from 'redux-logger';
import { Middleware } from 'redux';
import { baseApi } from '@/api/baseApi';

const middleware: Array<Middleware> = [
  baseApi.middleware,
  createLogger({
    duration: true,
    timestamp: false,
    collapsed: true,
    colors: {
      title: () => '#139BFE',
      prevState: () => '#1C5FAF',
      action: () => '#149945',
      nextState: () => '#A47104',
      error: () => '#ff0005',
    },
    predicate: () => typeof window !== 'undefined',
  }),
];

export { middleware };
