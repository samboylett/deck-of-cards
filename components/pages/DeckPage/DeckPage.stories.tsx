import React from 'react'
import { Story, Meta } from '@storybook/react'

import { DeckPage } from './DeckPage'

export default {
    title: 'suites/DeckPage',
    component: DeckPage,
    parameters: {
        actions: {
            argTypesRegex: '^on.*',
        },
    },
} as Meta

const Template: Story<Record<string, never>> = (args) => <DeckPage {...args} />

export const Default = Template.bind({})
