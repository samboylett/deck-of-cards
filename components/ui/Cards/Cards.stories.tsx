import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Cards, CardsProps } from './Cards'

export default {
    title: 'suites/Cards',
    component: Cards,
} as Meta

const Template: Story<CardsProps> = (args) => <Cards {...args} />

export const DeckOfCards = Template.bind({})
DeckOfCards.args = {
    cards: Array(52).fill(null),
}

export const FullHouse = Template.bind({})
FullHouse.args = {
    overlap: '50px',
    revealed: true,
    cards: [
        { suit: 'Diamonds', value: 'Ace' },
        { suit: 'Spades', value: 'Ace' },
        { suit: 'Hearts', value: 'Ace' },
        { suit: 'Diamonds', value: 'King' },
        { suit: 'Spades', value: 'King' },
    ],
}
