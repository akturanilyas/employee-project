import {graphql, HttpResponse} from 'msw';
import { Country, Employee } from '@/api/generated';

export const handlers = [
    graphql.query<{
        country: Country;
    }>('Country', () =>
        HttpResponse.json({
            data: {
                country: {
                    name: 'Brazil',
                    native: 'Brasil',
                    emoji: '🇧🇷',
                    currency: 'BRL',
                    languages: [
                        {
                            code: 'pt',
                            name: 'Portuguese',
                        },
                    ],
                },
            },
        }),
    ),
    graphql.mutation<{
        createEmployee: Employee;
    }>('MutationTest', () =>
        HttpResponse.json({
            data: {
                createEmployee: {name: 'employee ismi', id: 'ajksndas', star: 2},
            },
        }),
    ),
    graphql.query<{
        employee: Employee;
    }>('Employee', () =>
        HttpResponse.json({
            data: {
                employee: {name: 'employee ismi', id: 'ajksndas', star: 2},
            },
        }),
    ),
];
