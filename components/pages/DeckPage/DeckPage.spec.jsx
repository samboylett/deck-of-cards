import React from 'react'
import { mount } from 'enzyme'
import { useAsync } from 'react-async'

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

        test('sets template to loaded', () => {
            expect(wrapper.find(DeckTemplate).prop('loading')).toBeFalsy()
        })

        test('sets template to unerrored', () => {
            expect(wrapper.find(DeckTemplate).prop('errored')).toBeFalsy()
        })
    })

    describe('when loading', () => {
        beforeEach(() => {
            useAsync.mockReturnValue({ isPending: true })
            wrapper = mount(<DeckPage />)
        })

        test('sets template to loading', () => {
            expect(wrapper.find(DeckTemplate).prop('loading')).toEqual(true)
        })
    })

    describe('when errored', () => {
        beforeEach(() => {
            useAsync.mockReturnValue({ error: new Error })
            wrapper = mount(<DeckPage />)
        })

        test('sets template to errored', () => {
            expect(wrapper.find(DeckTemplate).prop('errored')).toEqual(true)
        })
    })
})
