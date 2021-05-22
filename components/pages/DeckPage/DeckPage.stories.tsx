import React from 'react'
import { Story, Meta } from '@storybook/react'

import { DeckPage, DeckPageProps } from './DeckPage'
import { getDeck } from '../../../helpers/cards/cards'

export default {
    title: 'suites/DeckPage',
    component: DeckPage,
    parameters: {
        actions: {
            argTypesRegex: '^on.*',
        },
    },
} as Meta

const Template: Story<DeckPageProps> = (args) => <DeckPage {...args} />

export const Default = Template.bind({})
Default.args = {
    initialDeck: getDeck(),
}
