import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import { DeckTemplate, DeckTemplateProps } from './DeckTemplate';
import CardValue from '../../../types/CardValue'
import CardSuit from '../../../types/CardSuit'

export default {
    title: 'suites/DeckTemplate',
    component: DeckTemplate,
} as Meta;

const Template: Story<DeckTemplateProps> = (args) => <DeckTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
    initialDeck: Object.keys(CardValue)
        .filter(e => isNaN(parseInt(e)))
        .flatMap(value => {
            return Object.keys(CardSuit)
                .filter(e => isNaN(parseInt(e)))
                .map(suit => ({
                    value,
                    suit,
                }))
        }),
};
