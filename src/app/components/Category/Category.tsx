import { CategoryIcon } from '../CategoryIcon/CategoryIcon';
import styles from './Category.module.scss';

type CategoryProps = {
  text: string;
  variant: 'liked' | 'recently' | 'friends';
};

export const Category = ({ text, variant }: CategoryProps) => {
  return (
    <div className={styles.categoryWrapper}>
      <CategoryIcon variant={variant} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
