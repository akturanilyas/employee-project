### Installment

- For development

```bash
yarn install && yarn dev
```

- For production.

```bash
yarn install && yarn build && yarn start
```

### Notes
- Due to an [issue](https://github.com/graphql-kit/graphql-faker/issues/196) with installing GraphQl Faker for the API,
  I used [msw](https://mswjs.io/). It allows us to directly use mocked data when we need to write tests.
- Logging is done by logging each request to the `app.log` file. Google Tag Manager can be used for user activities.
- TailwindCSS is used for styling.
- Redux is used for state management. I chose it because it's very convenient with RTKQuery.
- Codegen is used to automatically generate TypeScript types after creating schemas in GraphQL. It can be run in the
  development environment with the following command:

```bash
yarn run codegen:watch
```
