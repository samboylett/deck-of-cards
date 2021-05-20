import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Heart, HeartProps } from './Heart';

export default {
    title: 'suites/Heart',
    component: Heart,
} as Meta;

const Template: Story<HeartProps> = (args) => <Heart {...args} />;

export const DefaultStory = Template.bind({});
DefaultStory.args = {};
