import { LoadingIcon } from '@/components/common/loading/LoadingIcon';
import BaseView from '@/components/common/base-view/BaseView';

export default function Loading() {
  return (
    <BaseView className={'w-full h-dvh items items-center align-middle justify-center'}>
      <LoadingIcon />
    </BaseView>
  );
}
