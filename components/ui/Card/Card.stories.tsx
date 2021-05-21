import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import CardValue from '../../../types/CardValue'
import CardSuit from '../../../types/CardSuit'
import { Card, CardProps } from './Card';

const Decorator = styled.div`
    font-size: 200px;
`

export default {
    title: 'suites/Card',
    component: Card,
    decorators: [
        (Story) => (
            <Decorator>
                <Story />
            </Decorator>
        ),
    ],
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
