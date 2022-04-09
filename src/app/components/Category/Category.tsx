import clsx from 'clsx';

import { Icon } from 'ui/Icon/Icon';
import styles from './Category.module.scss';

type CategoryProps = {
  name: 'heart' | 'note' | 'friends';
  text: string;
  iconStyle?: 'pink' | 'blue' | 'purple';
  className?: string;
};

export const Category = ({ name, text, iconStyle, className }: CategoryProps) => {
  return (
    <div className={styles.categoryWrapper}>
      <div
        className={clsx(
          className,
          styles.iconWrapper,
          iconStyle === 'blue' && styles.blueGradient,
          iconStyle === 'purple' && styles.purpleGradient,
          iconStyle === 'pink' && styles.pinkGradient,
        )}
      >
        <Icon className={styles.icon} name={name} />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
