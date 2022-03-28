import styles from './CategoryIcon.module.scss';

import heart from '../../assets/icons/like3.svg';
import note from '../../assets/icons/music2.svg';
import friends from '../../assets/icons/friends2.svg';

import clsx from 'clsx';

type CategoryIcon = {
  variant: 'liked' | 'recently' | 'friends';
};

export const CategoryIcon = ({ variant }: CategoryIcon) => {
  return (
    <>
      {variant === 'liked' && (
        <div className={clsx(styles.iconWrapper, styles.liked)}>
          <img className={styles.iconImg} src={heart} alt="" />
        </div>
      )}
      {variant === 'recently' && (
        <div className={clsx(styles.iconWrapper, styles.recently)}>
          <img className={styles.iconImg} src={note} alt="" />
        </div>
      )}
      {variant === 'friends' && (
        <div className={clsx(styles.iconWrapper, styles.friends)}>
          <img className={styles.iconImg} src={friends} alt="" />
        </div>
      )}
    </>
  );
};
