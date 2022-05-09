import clsx from 'clsx';

import DailyMix1 from 'assets/images/DailyMix1.png';
import DailyMix2 from 'assets/images/DailyMix2.png';
import DailyMix3 from 'assets/images/DailyMix3.png';
import DailyMix4 from 'assets/images/DailyMix4.png';
import DiscoverWeekly from 'assets/images/DiscoverWeekly.png';
import styles from './Cover.module.scss';

const covers = {
  dailyMix1: DailyMix1,
  dailyMix2: DailyMix2,
  dailyMix3: DailyMix3,
  dailyMix4: DailyMix4,
  DiscoverWeekly: DiscoverWeekly,
} as const;

export type CoverProps = {
  name: keyof typeof covers;
  className?: string;
};

export const Cover = ({ name, className }: CoverProps) => {
  return (
    <div className={clsx(styles.coverContainer, className)}>
      <img src={covers[name]} alt={`Cover: ${covers[name]}`} />
    </div>
  );
};
