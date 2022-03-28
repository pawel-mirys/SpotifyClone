import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoryIcon } from './CategoryIcon';

export default {
  title: 'Category Icon',
  component: CategoryIcon,
} as ComponentMeta<typeof CategoryIcon>;

const Template: ComponentStory<typeof CategoryIcon> = (args) => (
  <CategoryIcon {...args} />
);

export const LikedSongs = Template.bind({});
LikedSongs.args = {
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
