import { ComponentStory } from '@storybook/react';

import { CategoryIcon } from './CategoryIcon';

const Template: ComponentStory<typeof CategoryIcon> = (args) => (
  <CategoryIcon {...args} />
);

export const Liked = Template.bind({});
Liked.args = {
  variant: 'liked',
};
export const RecentlyAdded = Template.bind({});
RecentlyAdded.args = {
  variant: 'recently',
};
export const FriendsPlayed = Template.bind({});
FriendsPlayed.args = {
  variant: 'friends',
};
