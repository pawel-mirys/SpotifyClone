import clsx from 'clsx';

import styles from './Icon.module.scss';

type IconProps = {
  src: string;
  name: string;
  className?: string;
  variant?: string;
};

export const Icon = ({ src, name, className, variant }: IconProps) => {
  return (
    <div
      className={clsx(
        styles.iconWrapper,
        className,
        variant === 'liked' && styles.pinkGradient,
        variant === 'recently' && styles.purpleGradient,
        variant === 'friends' && styles.blueGradient,
      )}
    >
      {<img src={src} alt={name} />}
    </div>
  );
};
