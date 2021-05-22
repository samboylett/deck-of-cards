import React from 'react'
import { shallow } from 'enzyme'

import useDeck from './useDeck'
import { getDeck } from '../../helpers/cards/cards'

describe('useDeck', () => {
    let wrapper

    const View = () => <div />
    const Logic = () => {
        const {
            deck,
            hand,
            revealedDeck,
            toggleReveal,
            shuffle,
            draw,
            reset,
        } = useDeck({
            initialDeck: getDeck(),
        })

        return (
            <View
                deck={ deck }
                hand={ hand }
                revealedDeck={ revealedDeck }
                onToggleReveal={ toggleReveal }
                onShuffle={ shuffle }
                onDraw={ draw }
                onReset={ reset }
            />
        )
    }

    const view = () => wrapper.find(View)

    describe('when rendered', () => {
        beforeEach(() => {
            wrapper = shallow(<Logic />)
        })

        test('renders the view', () => {
            expect(view()).toHaveLength(1)
        })

        test('passes the initial cards to the deck', () => {
            expect(view().prop('deck')).toEqual(getDeck())
        })

        test('passes no cards to the hand', () => {
            expect(view().prop('hand')).toEqual([])
        })

        test('sets the deck to hidden', () => {
            expect(view().prop('revealedDeck')).toEqual(false)
        })

        describe('when view emits drawv', () => {
            beforeEach(() => {
                view().simulate('draw')
            })

            test('removes the last card from the deck', () => {
                expect(view().prop('deck')).toEqual(getDeck().slice(0, -1))
            })

            test('adds the card to the hand', () => {
                expect(view().prop('hand')).toEqual([
                    getDeck().slice(-1)[0],
                ])
            })

            describe('when view emits reset', () => {
                beforeEach(() => {
                    view().simulate('reset')
                })

                test('sets the deck to the initial value', () => {
                    expect(view().prop('deck')).toEqual(getDeck())
                })

                test('clears the hand', () => {
                    expect(view().prop('hand')).toEqual([])
                })
            })
        })

        describe('when view emits shuffle', () => {
            let previousOrder

            beforeEach(() => {
                previousOrder = view().prop('deck')
                view().simulate('shuffle')
            })

            test('sets a new random order', () => {
                expect(view().prop('deck')).not.toEqual(previousOrder)
            })
        })

        describe('when view emits onToggleReveal', () => {
            beforeEach(() => {
                view().simulate('toggleReveal')
            })

            test('sets the deck to revealed', () => {
                expect(view().prop('revealedDeck')).toEqual(true)
            })

            describe('when view emits onToggleReveal', () => {
                beforeEach(() => {
                    view().simulate('toggleReveal')
                })

                test('sets the deck to hidden', () => {
                    expect(view().prop('revealedDeck')).toEqual(false)
                })
            })
        })
    })
})
