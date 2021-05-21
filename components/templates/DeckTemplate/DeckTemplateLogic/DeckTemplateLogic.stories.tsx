import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import { DeckTemplateView } from '../DeckTemplateView/DeckTemplateView'
import { DeckTemplateLogic, DeckTemplateLogicProps } from './DeckTemplateLogic';
import { getDeck } from '../../../../helpers/cards/cards'

export default {
    title: 'suites/DeckTemplateLogic',
    component: DeckTemplateLogic,
} as Meta;

const Template: Story<DeckTemplateLogicProps> = (args) => <DeckTemplateLogic {...args} />;

export const Default = Template.bind({});
Default.args = {
    initialDeck: getDeck(),
    View: DeckTemplateView,
};
