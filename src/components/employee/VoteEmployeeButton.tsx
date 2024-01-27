'use client';

import { FC, MouseEvent } from 'react';
import { useIncreaseEmployeeStarMutation } from '@/api/employeeApi';
import { Button } from '@/components/common/button/Button';
import { VoteEmployeeButtonProps } from '@/components/employee/VoteEmployeeButton.interface';

export const VoteEmployeeButton: FC<VoteEmployeeButtonProps> = (props) => {
  const { employeeId } = props;

  const [voteEmployee] = useIncreaseEmployeeStarMutation();

  const onEmployeeVote = (mouseEvent: MouseEvent<HTMLButtonElement>) => {
    mouseEvent.preventDefault();
    voteEmployee({ id: employeeId });
  };

  return <Button className={'px-4 py-2 bg-green-400 rounded-md'} label={'Vote'} onClick={onEmployeeVote} />;
};
