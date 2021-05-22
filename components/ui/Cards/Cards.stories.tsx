import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import CardValue from '../../../types/CardValue'
import CardSuit from '../../../types/CardSuit'
import { Cards, CardsProps } from './Cards';

export default {
    title: 'suites/Cards',
    component: Cards,
} as Meta;

const Template: Story<CardsProps> = (args) => <Cards {...args} />;

export const DeckOfCards = Template.bind({});
DeckOfCards.args = {
    cards: Array(52).fill(null),
};

export const FullHouse = Template.bind({});
FullHouse.args = {
    overlap: '50px',
    revealed: true,
    cards: [
        { suit: CardSuit.Diamonds, value: CardValue.Ace },
        { suit: CardSuit.Spades, value: CardValue.Ace },
        { suit: CardSuit.Hearts, value: CardValue.Ace },
        { suit: CardSuit.Diamonds, value: CardValue.King },
        { suit: CardSuit.Spades, value: CardValue.King },
    ],
};
