import { Icon } from 'ui/Icon/Icon';
import styles from './Category.module.scss';

type CategoryProps = {
  name: 'heart' | 'note' | 'friends';
  text: string;
};

export const Category = ({ name, text }: CategoryProps) => {
  return (
    <div className={styles.categoryWrapper}>
      <Icon className={styles.icon} name={name} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
