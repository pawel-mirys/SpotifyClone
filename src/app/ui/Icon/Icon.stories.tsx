import { ComponentStory, ComponentMeta } from '@storybook/react';

import heart from '../../assets/icons/like3.svg';
import note from '../../assets/icons/music2.svg';
import friends from '../../assets/icons/friends2.svg';
import { Icon } from './Icon';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  src: heart,
  name: 'Default Heart Icon',
};
export const RecentlyAdded = Template.bind({});
RecentlyAdded.args = {
  src: note,
  name: 'Note Icon - Purple Gradient',
  variant: 'recently',
};
export const FriendsPlayed = Template.bind({});
FriendsPlayed.args = {
  src: friends,
  name: 'Friends Icon - Blue Gradient',
  variant: 'friends',
};
export const LikedSongs = Template.bind({});
LikedSongs.args = {
  src: heart,
  name: 'Liked Icon - Pink Gradient',
  variant: 'liked',
};
