import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { GraphQLClient } from 'graphql-request';
import { Action, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export const client: GraphQLClient = new GraphQLClient('http://localhost:3000/graphql');

client.setHeader('Content-Type', 'application/json');

function isHydrateAction(action: Action): action is PayloadAction {
  return action.type === HYDRATE;
}

const graphqlBaseQuery = graphqlRequestBaseQuery({
  client,
});

export const baseApi = createApi({
  baseQuery: graphqlBaseQuery,
  endpoints: () => ({}),
  tagTypes: [],
  extractRehydrationInfo(action, { reducerPath }) {
    if (isHydrateAction(action)) {
      // @ts-ignore
      return action.payload[reducerPath];
    }
  },
});
