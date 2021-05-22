import React from 'react';
import { Story, Meta } from '@storybook/react';

import CardValue from '../../../types/CardValue'
import CardSuit from '../../../types/CardSuit'
import { Card, CardProps } from './Card';

export default {
    title: 'suites/Card',
    component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    card: { suit: CardSuit.Spades, value: CardValue.Ace },
};

export const Revealed = Template.bind({});
Revealed.args = {
    card: { suit: CardSuit.Spades, value: CardValue.Ace },
    revealed: true,
};
