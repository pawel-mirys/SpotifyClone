import clsx from 'clsx';
import { useState } from 'react';

import { Cover, CoverProps } from 'ui/Cover/Cover';
import { Icon } from 'ui/Icon/Icon';
import { IconButton } from 'ui/IconButton/IconButton';
import styles from './Card.module.scss';

type CardProps = {
  cardType: 'personal' | 'playlist';
  title: string;
  description?: string;
  coverName: CoverProps['name'];
  className?: string;
};

export const Card = ({ cardType, title, description, className, coverName }: CardProps) => {
  const [focus, setFocus] = useState(false);
  const [follow, setFollow] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          console.log(`Open playlist: ${title}`);
        }}
        onMouseEnter={() => {
          setFocus(true);
        }}
        onMouseLeave={() => {
          setFocus(false);
        }}
        className={clsx(className, styles.cardContainer, {
          [styles.playlist]: cardType === 'playlist',
          [styles.personal]: cardType === 'personal',
        })}
      >
        <div className={styles.coverWrapper}>
          <Cover name={coverName} />
          {focus === true && (
            <IconButton
              className={styles.playButton}
              onClick={() => {
                console.log(`Run: ${title}`);
              }}
              children={<Icon name="play" />}
            />
          )}
        </div>
        <div
          className={clsx(styles.titleWrapper, {
            [styles.wrapperPlaylist]: cardType === 'playlist',
            [styles.wrapperPersonal]: cardType === 'personal',
          })}
        >
          <h4 className={styles.cardTitle}>{title}</h4>
          {cardType === 'personal' && <p className={styles.cardDescription}>{description}</p>}
          {cardType === 'playlist' && !follow && (
            <IconButton
              onClick={() => {
                setFollow(true);
                console.log(`Follow: ${title}`);
              }}
              children={<Icon className={styles.followIcon} name="follow" />}
            />
          )}
          {cardType === 'playlist' && follow && (
            <IconButton
              onClick={() => {
                setFollow(false);
                console.log(`Unfollow: ${title}`);
              }}
              children={<Icon className={styles.followIcon} name="unfollow" />}
            />
          )}
        </div>
      </div>
    </>
  );
};
