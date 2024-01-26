'use client';

import { useEmployeesQuery, useIncreaseEmployeeStarMutation } from '@/api/employeeApi';
import { useEmployeeQuery } from '@/api/generated';

export default function Home() {
  const { data } = useEmployeesQuery();

  useEmployeeQuery({ id: 1 });
  const [increaseEmployeeMutation] = useIncreaseEmployeeStarMutation();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <span>test</span>
    </main>
  );
}
