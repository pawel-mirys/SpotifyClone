import clsx from 'clsx';

import { Cover, CoverProps } from 'ui/Cover/Cover';
import { Icon } from 'ui/Icon/Icon';
import { IconButton } from 'ui/IconButton/IconButton';
import styles from './Card.module.scss';

export type CardProps = {
  cardType: 'personal' | 'system';
  title: string;
  description?: string;
  coverName: CoverProps['name'];
  className?: string;
  followed?: boolean;
};

export const Card = ({ followed, cardType, title, description, className, coverName }: CardProps) => {
  const isPersonalPlaylist = cardType === 'personal';
  const isSystemPlaylist = cardType === 'system';

  return (
    <div
      onClick={() => {
        console.log(`Open playlist: ${title}`);
      }}
      className={clsx(className, styles.cardContainer, {
        [styles.system]: isSystemPlaylist,
        [styles.personal]: isPersonalPlaylist,
      })}
    >
      <div className={styles.coverWrapper}>
        <Cover name={coverName} />
        <IconButton
          className={styles.playButton}
          onClick={() => {
            console.log(`Run: ${title}`);
          }}
        >
          <Icon name={'play'} />
        </IconButton>
      </div>
      <div
        className={clsx(styles.titleWrapper, {
          [styles.wrapperPlaylist]: isSystemPlaylist,
          [styles.wrapperPersonal]: isPersonalPlaylist,
        })}
      >
        <h4 className={styles.cardTitle}>{title}</h4>
        {isPersonalPlaylist && <p className={styles.cardDescription}>{description}</p>}
        {isSystemPlaylist && (
          <IconButton onClick={() => {}}>
            <Icon className={styles.followIcon} name={followed ? 'follow' : 'follow'} />
          </IconButton>
        )}
      </div>
    </div>
  );
};
