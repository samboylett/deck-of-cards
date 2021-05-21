import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import { DeckTemplateView, DeckTemplateViewProps } from './DeckTemplateView';
import { getDeck } from '../../../../helpers/cards/cards'

export default {
    title: 'suites/DeckTemplateView',
    component: DeckTemplateView,
    parameters: {
        actions: {
            argTypesRegex: '^on.*',
        },
    },
} as Meta;

const Template: Story<DeckTemplateViewProps> = (args) => <DeckTemplateView {...args} />;

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
