import { ReactComponent as Heart } from 'assets/icons/like3.svg';
import { ReactComponent as Note } from 'assets/icons/music2.svg';
import { ReactComponent as friends } from 'assets/icons/friends2.svg';
import { ReactComponent as Play } from 'assets/icons/play.svg';
import { ReactComponent as Follow } from 'assets/icons/Eye.svg';
import { ReactComponent as Unfollow } from 'assets/icons/EyeSlash.svg';

const icons = {
  heart: Heart,
  note: Note,
  friends: friends,
  play: Play,
  follow: Follow,
  unfollow: Unfollow,
} as const;

export type IconProps = {
  name: keyof typeof icons;
  className?: string;
};

export const Icon = ({ name, className, ...props }: IconProps) => {
  const Component = icons[name];

  if (Component) {
    return <Component className={className} {...props} />;
  }

  throw new Error('Invalid icon name');
};
