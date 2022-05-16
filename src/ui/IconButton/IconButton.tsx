import { ReactElement } from 'react';

type IconButtonProps = {
  className?: string;
  children: ReactElement | JSX.Element | string;
  onClick: Function;
  ariaLabel?: string;
};

export const IconButton = ({ className, children, onClick, ariaLabel }: IconButtonProps) => {
  return (
    <button aria-label={ariaLabel} onClick={onClick()} className={className}>
      {children}
    </button>
  );
};
