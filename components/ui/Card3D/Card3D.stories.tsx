import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import CardValue from '../../../types/CardValue'
import CardSuit from '../../../types/CardSuit'
import { Card3D, Card3DProps } from './Card3D';

const Decorator = styled.div`
    font-size: 200px;
`

export default {
    title: 'suites/Card3D',
    component: Card3D,
    decorators: [
        (Story) => (
            <Decorator>
                <Story />
            </Decorator>
        ),
    ],
} as Meta;

const Template: Story<Card3DProps> = (args) => <Card3D {...args} />;

export const Default = Template.bind({});
Default.args = {
    card: { suit: CardSuit.Spades, value: CardValue.Ace },
};

export const Revealed = Template.bind({});
Revealed.args = {
    card: { suit: CardSuit.Spades, value: CardValue.Ace },
    revealed: true,
};
