import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import { CardImage, CardImageProps } from './CardImage';
import CardValue from '../../../types/CardValue'
import CardSuit from '../../../types/CardSuit'

const Decorator = styled.div`
    font-size: 200px;
`

export default {
    title: 'suites/CardImage',
    component: CardImage,
    decorators: [
        (Story) => (
            <Decorator>
                <Story />
            </Decorator>
        ),
    ],
} as Meta;

const Template: Story<CardImageProps> = (args) => <CardImage {...args} />;

export const BackOfCard = Template.bind({});
BackOfCard.args = {
    card: null,
};

export const AceOfSpades = Template.bind({});
AceOfSpades.args = {
    card: {
        suit: CardSuit.Spades,
        value: CardValue.Ace,
    },
};

export const KingOfSpades = Template.bind({});
KingOfSpades.args = {
    card: {
        suit: CardSuit.Spades,
        value: CardValue.King,
    },
};

export const TenOfSpades = Template.bind({});
TenOfSpades.args = {
    card: {
        suit: CardSuit.Spades,
        value: CardValue.Ten,
    },
};

export const JackOfSpades = Template.bind({});
JackOfSpades.args = {
    card: {
        suit: CardSuit.Spades,
        value: CardValue.Jack,
    },
};

export const QueenOfSpades = Template.bind({});
QueenOfSpades.args = {
    card: {
        suit: CardSuit.Spades,
        value: CardValue.Queen,
    },
};

export const AceOfHearts = Template.bind({});
AceOfHearts.args = {
    card: {
        suit: CardSuit.Hearts,
        value: CardValue.Ace,
    },
};

export const KingOfHearts = Template.bind({});
KingOfHearts.args = {
    card: {
        suit: CardSuit.Hearts,
        value: CardValue.King,
    },
};

export const TenOfHearts = Template.bind({});
TenOfHearts.args = {
    card: {
        suit: CardSuit.Hearts,
        value: CardValue.Ten,
    },
};

export const JackOfHearts = Template.bind({});
JackOfHearts.args = {
    card: {
        suit: CardSuit.Hearts,
        value: CardValue.Jack,
    },
};

export const QueenOfHearts = Template.bind({});
QueenOfHearts.args = {
    card: {
        suit: CardSuit.Hearts,
        value: CardValue.Queen,
    },
};
