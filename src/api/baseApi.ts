import { BaseQueryApi, createApi } from '@reduxjs/toolkit/query/react';
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

export const baseQueryWithInterceptors = async (
  {
    document,
    variables,
  }: {
    document: string;
    variables: void | Record<string, unknown>;
  },
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>,
) => {
  const result = await graphqlBaseQuery({ document, variables }, api, extraOptions);

  fetch('/api/logger', { method: 'POST', body: JSON.stringify({ document, variables }) });

  return result;
};

export const baseApi = createApi({
  baseQuery: baseQueryWithInterceptors,
  endpoints: () => ({}),
  extractRehydrationInfo(action, { reducerPath }) {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath as keyof typeof action.payload];
    }
  },
});
