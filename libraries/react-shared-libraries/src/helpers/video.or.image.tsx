import { FC } from 'react';
import { clsx } from 'clsx';
import { hasExtension } from '@gitroom/helpers/utils/has.extension';
export const VideoOrImage: FC<{
  src: string;
  autoplay: boolean;
  controls?: boolean;
  isContain?: boolean;
  imageClassName?: string;
  videoClassName?: string;
}> = (props) => {
  const { src, autoplay, controls, isContain, imageClassName, videoClassName } =
    props;
  if (hasExtension(src, 'mp4')) {
    return (
      <video
        src={src}
        autoPlay={autoplay}
        controls={controls}
        className={clsx('w-full h-full', videoClassName)}
        muted={!controls}
        loop={!controls}
      />
    );
  }
  return (
    <img
      className={clsx(
        isContain ? 'object-contain' : 'object-cover',
        'w-full h-full',
        imageClassName
      )}
      src={src}
    />
  );
};
