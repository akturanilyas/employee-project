import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { GraphQLClient } from 'graphql-request';

export const client: GraphQLClient = new GraphQLClient('http://localhost:3000/graphql');

client.setHeader('Content-Type', 'application/json');

const graphqlBaseQuery = graphqlRequestBaseQuery({
  client,
});

export const baseApi = createApi({
  baseQuery: graphqlBaseQuery,
  endpoints: () => ({}),
  tagTypes: [],
});
