import clsx from 'clsx';

import { ReactElement } from 'react';

import styles from './IconButton.module.scss';

type IconButtonProps = {
  className?: string;
  children: ReactElement | JSX.Element | string;
  onClick: Function;
  ariaLabel?: string;
};

export const IconButton = ({ className, children, onClick, ariaLabel }: IconButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClick();
      }}
      className={clsx(styles.iconButton, className)}
    >
      {children}
    </button>
  );
};
