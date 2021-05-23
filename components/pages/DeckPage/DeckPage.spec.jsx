import React from 'react'
import { mount } from 'enzyme'
import { useAsync } from 'react-async'
import { Loader, Message } from 'semantic-ui-react'

import { DeckPage } from './DeckPage'
import { DeckTemplate } from '../../templates/DeckTemplate/DeckTemplate'
import { getDeck } from '../../../helpers/cards/cards'

describe('DeckPage', () => {
    let wrapper

    describe('when rendered', () => {
        beforeEach(() => {
            useAsync.mockReturnValue({})
            wrapper = mount(<DeckPage />)
        })

        test('renders a DeckTemplate', () => {
            expect(wrapper.find(DeckTemplate)).toHaveLength(1)
        })

        test('passes default deck to template', () => {
            expect(wrapper.find(DeckTemplate).prop('deck')).toEqual(getDeck())
        })
    })

    describe('when loading', () => {
        beforeEach(() => {
            useAsync.mockReturnValue({ isPending: true })
            wrapper = mount(<DeckPage />)
        })

        test('renders a Loader', () => {
            expect(wrapper.find(Loader)).toHaveLength(1)
        })
    })

    describe('when errored', () => {
        beforeEach(() => {
            useAsync.mockReturnValue({ error: new Error })
            wrapper = mount(<DeckPage />)
        })

        test('renders a Message', () => {
            expect(wrapper.find(Message)).toHaveLength(1)
        })
    })
})
