import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from '@/components/common/button/Button.interface';
import BaseView from '@/components/common/base-view/BaseView';

export const Button: FC<ButtonProps> = (props) => {
  const { label, className, onClick } = props;

  const classes = twMerge(`
    bg-blue-800 
    ${className || ''}
  `);

  return (
    <BaseView>
      <button className={classes} onClick={onClick}>
        {label}
      </button>
    </BaseView>
  );
};
