import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from '@/components/common/button/Button.interface';
import { BaseText } from '@/components/common/base-text/BaseText';

export const Button: FC<ButtonProps> = (props) => {
  const { label, className, onClick } = props;

  const classes = twMerge(`
    ${className || ''}
  `);

  return (
    <button className={classes} onClick={onClick}>
      <BaseText label={label} className={'p-0'} textClassName={'text-white'} />
    </button>
  );
};
