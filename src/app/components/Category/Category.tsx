import { Icon } from '../../../ui/Icon/Icon';
import styles from './Category.module.scss';

type CategoryProps = {
  src: string;
  iconName: string;
  text: string;
  variant?: 'liked' | 'recently' | 'friends';
};

export const Category = ({ src, iconName, variant, text }: CategoryProps) => {
  return (
    <div className={styles.categoryWrapper}>
      <Icon src={src} name={iconName} variant={variant} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
