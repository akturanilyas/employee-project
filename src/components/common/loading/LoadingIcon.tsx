import BaseView from '@/components/common/base-view/BaseView';
import loadingSvg from '../../../assets/icons/loading.svg';
import { BaseImage } from '@/components/common/base-image/BaseImage';

export const LoadingIcon = () => (
  <BaseView>
    <BaseImage alt={'loading'} src={loadingSvg} />
  </BaseView>
);
