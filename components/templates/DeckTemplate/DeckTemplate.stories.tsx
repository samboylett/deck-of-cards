import React from 'react';
import { Story, Meta } from '@storybook/react';

import { DeckTemplate, DeckTemplateProps } from './DeckTemplate';
import { getDeck } from '../../../helpers/cards/cards'

export default {
    title: 'suites/DeckTemplate',
    component: DeckTemplate,
    parameters: {
        actions: {
            argTypesRegex: '^on.*',
        },
    },
} as Meta;

const Template: Story<DeckTemplateProps> = (args) => <DeckTemplate {...args} />;

export const AllInDeck = Template.bind({});
AllInDeck.args = {
    deck: getDeck(),
    hand: [],
    revealedDeck: false,
};

export const DeckRevealed = Template.bind({});
DeckRevealed.args = {
    deck: getDeck(),
    hand: [],
    revealedDeck: true,
};

export const AllInHand = Template.bind({});
AllInHand.args = {
    deck: [],
    hand: getDeck(),
    revealedDeck: false,
};
