import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Suit, SuitProps } from './Suit';

export default {
    title: 'suites/Suit',
    component: Suit,
} as Meta;

const Template: Story<SuitProps> = (args) => <Suit {...args} />;

export const Hearts = Template.bind({});
Hearts.args = {
    suit: 'Hearts',
};

export const Clubs = Template.bind({});
Clubs.args = {
    suit: 'Clubs',
};

export const Diamonds = Template.bind({});
Diamonds.args = {
    suit: 'Diamonds',
};

export const Spades = Template.bind({});
Spades.args = {
    suit: 'Spades',
};
