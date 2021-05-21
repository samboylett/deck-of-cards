import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from 'styled-components';

import { DeckTemplate, DeckTemplateProps } from './DeckTemplate';
import { getDeck } from '../../../helpers/cards/cards'

export default {
    title: 'suites/DeckTemplate',
    component: DeckTemplate,
} as Meta;

const Template: Story<DeckTemplateProps> = (args) => <DeckTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
    initialDeck: getDeck(),
};
