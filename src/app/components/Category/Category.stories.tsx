import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Category } from './Category';
import heart from '../../assets/icons/like3.svg';
import note from '../../assets/icons/music2.svg';
import friends from '../../assets/icons/friends2.svg';

export default {
  title: 'Category',
  component: Category,
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args) => <Category {...args} />;

export const DefaultCategory = Template.bind({});
DefaultCategory.args = {
  text: 'Default',
};

export const LikedSongs = Template.bind({});
LikedSongs.args = {
  text: 'Liked Songs',
  variant: 'liked',
  src: heart,
};
export const RecentlyAdded = Template.bind({});
RecentlyAdded.args = {
  text: 'Recently Added',
  variant: 'recently',
  src: note,
};
export const FriendsPlayed = Template.bind({});
FriendsPlayed.args = {
  text: 'FriendsPlayed',
  variant: 'friends',
  src: friends,
};
