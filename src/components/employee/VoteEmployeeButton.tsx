'use client';

import { FC, MouseEvent } from 'react';
import { useIncreaseEmployeeStarMutation } from '@/api/employeeApi';
import { Button } from '@/components/common/button/Button';
import { VoteEmployeeButtonProps } from '@/components/employee/VoteEmployeeButton.interface';
import { twMerge } from 'tailwind-merge';

export const VoteEmployeeButton: FC<VoteEmployeeButtonProps> = (props) => {
  const { employeeId, className } = props;

  const [voteEmployee] = useIncreaseEmployeeStarMutation();

  const classes = twMerge('px-4 py-2 bg-green-400 rounded-md', className);

  const onEmployeeVote = (mouseEvent: MouseEvent<HTMLButtonElement>) => {
    mouseEvent.preventDefault();
    voteEmployee({ id: employeeId });
  };

  return <Button className={classes} label={'Vote'} onClick={onEmployeeVote} />;
};
