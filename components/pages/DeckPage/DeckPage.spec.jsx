import React from 'react'
import { mount } from 'enzyme'

import { DeckPage } from './DeckPage'
import { DeckTemplate } from '../../templates/DeckTemplate/DeckTemplate'
import { getDeck } from '../../../helpers/cards/cards'

describe('DeckPage', () => {
    let wrapper

    describe('when rendered', () => {
        beforeEach(() => {
            wrapper = mount(<DeckPage />)
        })

        test('renders a DeckTemplate', () => {
            expect(wrapper.find(DeckTemplate)).toHaveLength(1)
        })

        test('passes default deck to template', () => {
            expect(wrapper.find(DeckTemplate).prop('deck')).toEqual(getDeck())
        })
    })
})
