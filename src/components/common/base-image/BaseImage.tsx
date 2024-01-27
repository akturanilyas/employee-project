import { FC } from 'react';
import { BaseImageProps } from '@/components/common/base-image/BaseImage.interface';
import Image from 'next/image';

export const BaseImage: FC<BaseImageProps> = (props) => {
  const { className, height = 50, width = 50, src, alt } = props;

  return <Image alt={alt} src={src} className={className} height={height} width={width} />;
};
