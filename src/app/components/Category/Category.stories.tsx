import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Category } from './Category';

export default {
  title: 'Category',
  component: Category,
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args) => (
  <Category {...args} />
);

export const LikedSongs = Template.bind({});
LikedSongs.args = {
  text: 'Liked Songs',
  variant: 'liked',
};
export const RecentlyAdded = Template.bind({});
RecentlyAdded.args = {
  text: 'Recently Added',
  variant: 'recently',
};
export const FriendsPlayed = Template.bind({});
FriendsPlayed.args = {
  text: 'FriendsPlayed',
  variant: 'friends',
};
