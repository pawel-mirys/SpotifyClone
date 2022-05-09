import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const SimpleIcon = Template.bind({});
SimpleIcon.args = {
  name: 'heart',
};
