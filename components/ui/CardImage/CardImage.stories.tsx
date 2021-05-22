import React from 'react'
import { Story, Meta } from '@storybook/react'

import { CardImage, CardImageProps } from './CardImage'

export default {
    title: 'suites/CardImage',
    component: CardImage,
} as Meta

const Template: Story<CardImageProps> = (args) => <CardImage {...args} />

export const BackOfCard = Template.bind({})
BackOfCard.args = {
    card: null,
}

export const AceOfSpades = Template.bind({})
AceOfSpades.args = {
    card: {
        suit: 'Spades',
        value: 'Ace',
    },
}

export const KingOfSpades = Template.bind({})
KingOfSpades.args = {
    card: {
        suit: 'Spades',
        value: 'King',
    },
}

export const TenOfSpades = Template.bind({})
TenOfSpades.args = {
    card: {
        suit: 'Spades',
        value: 'Ten',
    },
}

export const JackOfSpades = Template.bind({})
JackOfSpades.args = {
    card: {
        suit: 'Spades',
        value: 'Jack',
    },
}

export const QueenOfSpades = Template.bind({})
QueenOfSpades.args = {
    card: {
        suit: 'Spades',
        value: 'Queen',
    },
}

export const AceOfHearts = Template.bind({})
AceOfHearts.args = {
    card: {
        suit: 'Hearts',
        value: 'Ace',
    },
}

export const KingOfHearts = Template.bind({})
KingOfHearts.args = {
    card: {
        suit: 'Hearts',
        value: 'King',
    },
}

export const TenOfHearts = Template.bind({})
TenOfHearts.args = {
    card: {
        suit: 'Hearts',
        value: 'Ten',
    },
}

export const JackOfHearts = Template.bind({})
JackOfHearts.args = {
    card: {
        suit: 'Hearts',
        value: 'Jack',
    },
}

export const QueenOfHearts = Template.bind({})
QueenOfHearts.args = {
    card: {
        suit: 'Hearts',
        value: 'Queen',
    },
}
