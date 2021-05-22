import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Card, CardProps } from './Card'

export default {
    title: 'suites/Card',
    component: Card,
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
    card: { suit: 'Spades', value: 'Ace' },
}

export const Revealed = Template.bind({})
Revealed.args = {
    card: { suit: 'Spades', value: 'Ace' },
    revealed: true,
}
