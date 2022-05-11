import clsx from 'clsx';

import { Cover, CoverProps } from 'ui/Cover/Cover';
import styles from './Card.module.scss';

type CardProps = {
  cardType: 'personal' | 'playlist';
  title: string;
  description?: string;
  coverName: CoverProps['name'];
  className?: string;
};

export const Card = ({ cardType, title, description, className, coverName }: CardProps) => {
  return (
    <>
      <div
        onClick={() => {
          console.log(`Open playlist: ${title}`);
        }}
        className={clsx(className, styles.cardContainer, {
          [styles.playlist]: cardType === 'playlist',
          [styles.personal]: cardType === 'personal',
        })}
      >
        <Cover name={coverName} />
        <div
          className={clsx(styles.titleWrapper, {
            [styles.wrapperPlaylist]: cardType === 'playlist',
            [styles.wrapperPersonal]: cardType === 'personal',
          })}
        >
          <h4 className={styles.cardTitle}>{title}</h4>
          {cardType === 'personal' && <p className={styles.cardDescription}>{description}</p>}
        </div>
      </div>
    </>
  );
};
