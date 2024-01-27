import { baseApi } from '@/api/baseApi';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<
  T extends {
    [key: string]: unknown;
  },
> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<
  T extends {
    [key: string]: unknown;
  },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: {
    input: string;
    output: string;
  };
  String: {
    input: string;
    output: string;
  };
  Boolean: {
    input: boolean;
    output: boolean;
  };
  Int: {
    input: number;
    output: number;
  };
  Float: {
    input: number;
    output: number;
  };
};

export type Employee = {
  __typename?: 'Employee';
  email: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  job: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  star: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  increaseEmployeeStar?: Maybe<Employee>;
};

export type MutationIncreaseEmployeeStarArgs = {
  id: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  employee?: Maybe<Employee>;
  employees?: Maybe<Array<Employee>>;
};

export type QueryEmployeeArgs = {
  id: Scalars['Int']['input'];
};

export type EmployeesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type EmployeesQuery = {
  __typename?: 'Query';
  employees?: Array<{
    __typename?: 'Employee';
    id: number;
    star: number;
    email: string;
    first_name: string;
    last_name: string;
    job: string;
    image: string;
  }> | null;
};

export type EmployeeQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type EmployeeQuery = {
  __typename?: 'Query';
  employee?: {
    __typename?: 'Employee';
    id: number;
    star: number;
    email: string;
    first_name: string;
    last_name: string;
    job: string;
    image: string;
  } | null;
};

export type IncreaseEmployeeStarMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type IncreaseEmployeeStarMutation = {
  __typename?: 'Mutation';
  increaseEmployeeStar?: {
    __typename?: 'Employee';
    star: number;
    id: number;
  } | null;
};

export const EmployeesDocument = `
    query employees {
  employees {
    id
    star
    email
    first_name
    last_name
    job
    image
  }
}
    `;
export const EmployeeDocument = `
    query employee($id: Int!) {
  employee(id: $id) {
    id
    star
    email
    first_name
    last_name
    job
    image
  }
}
    `;
export const IncreaseEmployeeStarDocument = `
    mutation increaseEmployeeStar($id: Int!) {
  increaseEmployeeStar(id: $id) {
    star
    id
  }
}
    `;

const injectedRtkApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    employees: build.query<EmployeesQuery, EmployeesQueryVariables | void>({
      query: (variables) => ({ document: EmployeesDocument, variables }),
    }),
    employee: build.query<EmployeeQuery, EmployeeQueryVariables>({
      query: (variables) => ({ document: EmployeeDocument, variables }),
    }),
    increaseEmployeeStar: build.mutation<IncreaseEmployeeStarMutation, IncreaseEmployeeStarMutationVariables>({
      query: (variables) => ({ document: IncreaseEmployeeStarDocument, variables }),
    }),
  }),
});

export { injectedRtkApi as api };
export const {
  useEmployeesQuery,
  useLazyEmployeesQuery,
  useEmployeeQuery,
  useLazyEmployeeQuery,
  useIncreaseEmployeeStarMutation,
} = injectedRtkApi;
