import React from 'react'
import { shallow } from 'enzyme'

import { DeckTemplate } from './DeckTemplate'
import { Cards } from '../../ui/Cards/Cards'
import { getDeck } from '../../../helpers/cards/cards'

describe('DeckTemplate', () => {
    let wrapper

    const deck = () => wrapper.find(Cards).get(0)

    describe('when rendered with a pack of cards', () => {
        beforeEach(() => {
            wrapper = shallow(<DeckTemplate initialDeck={ getDeck() } />)
        })

        test('passes the cards to the deck', () => {
            expect(deck().props.cards).toEqual(getDeck())
        })
    })
})
