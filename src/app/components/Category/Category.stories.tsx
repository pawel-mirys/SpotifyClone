import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Category } from './Category';

export default {
  title: 'Category',
  component: Category,
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args) => <Category {...args} />;

export const DefaultCategory = Template.bind({});
DefaultCategory.args = {
  text: 'Default',
  name: 'friends',
};

export const LikedSongs = Template.bind({});
LikedSongs.args = {
  text: 'Liked Songs',
  name: 'heart',
  iconStyle: 'pink',
};
export const RecentlyAdded = Template.bind({});
RecentlyAdded.args = {
  text: 'Recently Added',
  name: 'note',
  iconStyle: 'purple',
};
export const FriendsPlayed = Template.bind({});
FriendsPlayed.args = {
  text: 'FriendsPlayed',
  name: 'friends',
  iconStyle: 'blue',
};
