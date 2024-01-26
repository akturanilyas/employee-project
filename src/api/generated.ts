import { baseApi } from '@/api/baseApi';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Country = {
  __typename?: 'Country';
  currency?: Maybe<Scalars['String']['output']>;
  emoji?: Maybe<Scalars['String']['output']>;
  languages?: Maybe<Array<Maybe<Language>>>;
  name?: Maybe<Scalars['String']['output']>;
  native?: Maybe<Scalars['String']['output']>;
};

export type Employee = {
  __typename?: 'Employee';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  star?: Maybe<Scalars['Int']['output']>;
};

export type Language = {
  __typename?: 'Language';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEmployee?: Maybe<Employee>;
};


export type MutationCreateEmployeeArgs = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  star: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  country?: Maybe<Country>;
  employee?: Maybe<Employee>;
};

export type CountryQueryVariables = Exact<{ [key: string]: never; }>;


export type CountryQuery = { __typename?: 'Query', country?: { __typename?: 'Country', currency?: string | null } | null };

export type EmployeeQueryVariables = Exact<{ [key: string]: never; }>;


export type EmployeeQuery = { __typename?: 'Query', employee?: { __typename?: 'Employee', id?: string | null, name?: string | null, star?: number | null } | null };

export type MutationTestMutationVariables = Exact<{
  ep: Scalars['String']['input'];
  review: Scalars['String']['input'];
  star: Scalars['Int']['input'];
}>;


export type MutationTestMutation = { __typename?: 'Mutation', createEmployee?: { __typename?: 'Employee', star?: number | null, id?: string | null } | null };


export const CountryDocument = `
    query Country {
  country {
    currency
  }
}
    `;
export const EmployeeDocument = `
    query Employee {
  employee {
    id
    name
    star
  }
}
    `;
export const MutationTestDocument = `
    mutation MutationTest($ep: String!, $review: String!, $star: Int!) {
  createEmployee(name: $ep, id: $review, star: $star) {
    star
    id
  }
}
    `;

const injectedRtkApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    Country: build.query<CountryQuery, CountryQueryVariables | void>({
      query: (variables) => ({ document: CountryDocument, variables })
    }),
    Employee: build.query<EmployeeQuery, EmployeeQueryVariables | void>({
      query: (variables) => ({ document: EmployeeDocument, variables })
    }),
    MutationTest: build.mutation<MutationTestMutation, MutationTestMutationVariables>({
      query: (variables) => ({ document: MutationTestDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useCountryQuery, useLazyCountryQuery, useEmployeeQuery, useLazyEmployeeQuery, useMutationTestMutation } = injectedRtkApi;

