import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/graphql/schema.graphql',
  documents: './src/**/*.graphql',
  generates: {
    'src/api/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        {
          'typescript-rtk-query': {
            importBaseApiFrom: '@/api/baseApi',
            importBaseApiAlternateName: 'baseApi',
            exportHooks: true,
          },
        },
      ],
    },
  },
  overwrite: true,
};

export default config;
