import { ComponentStory } from '@storybook/react';

import { Category } from './Category';

const Template: ComponentStory<typeof Category> = (args) => (
  <Category {...args} />
);

export const Liked = Template.bind({});
Liked.args = {
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
