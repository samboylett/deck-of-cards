import React from 'react'
import { shallow } from 'enzyme'
import { Cards } from './Cards'
import { Card } from '../Card/Card'

describe('Cards', () => {
    let wrapper

    describe('when rendering 52 backs of cards', () => {
        beforeEach(() => {
            wrapper = shallow(<Cards cards={ Array(52).fill(null) } />)
        })

        test('renders 52 cards', () => {
            expect(wrapper.find(Card)).toHaveLength(52)
        })

        test('passes null card prop to every card', () => {
            wrapper.find(Card).forEach(cardWrapper => {
                expect(cardWrapper.prop('card')).toBe(null)
            })
        });
    })

    describe('when rendering a hand', () => {
        let cards

        beforeEach(() => {
            cards = [
                { suit: 'Spades', value: 'Ace' },
                { suit: 'Hearts', value: 'King' },
                { suit: 'Diamonds', value: 'Nine' },
            ]
            wrapper = shallow(<Cards cards={ cards } />)
        })

        test('renders all the passed cards', () => {
            expect(wrapper.find(Card)).toHaveLength(cards.length)
        })

        test.each([0, 1, 2])('passes the card at index %d to the component at the same index', (index) => {
            expect(wrapper.find(Card).get(index).props.card).toEqual(cards[index])
        })
    })
})
