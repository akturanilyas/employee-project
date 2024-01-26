import { employeeApi } from '@/api/employeeApi';
import { Middleware } from 'redux';

const middleware: Array<Middleware> = [employeeApi.middleware];

export { middleware };
