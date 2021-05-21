import React from 'react'
import { mount } from 'enzyme'

import { DeckTemplateLogic } from './DeckTemplateLogic'
import { DeckTemplateView } from '../DeckTemplateView/DeckTemplateView'
import { Cards } from '../../../ui/Cards/Cards'
import { Button } from 'semantic-ui-react'
import { getDeck } from '../../../../helpers/cards/cards'

describe('DeckTemplateLogic', () => {
    let wrapper

    // const View = () => (<div />)
    const View = DeckTemplateView

    const deck = () => wrapper.find(Cards).get(0)
    const hand = () => wrapper.find(Cards).get(1)
    const revealButton = () => wrapper.find(Button).filterWhere(b => b.text() === 'Reveal Deck')
    const hideButton = () => wrapper.find(Button).filterWhere(b => b.text() === 'Hide Deck')
    const shuffleButton = () => wrapper.find(Button).filterWhere(b => b.text() === 'Shuffle')
    const drawButton = () => wrapper.find(Button).filterWhere(b => b.text() === 'Draw')
    const resetButton = () => wrapper.find(Button).filterWhere(b => b.text() === 'Reset')

    describe('when rendered with a pack of cards', () => {
        beforeEach(() => {
            wrapper = mount(<DeckTemplateLogic initialDeck={ getDeck() } View={ View } />)
        })

        test('passes the cards to the deck', () => {
            expect(deck().props.cards).toEqual(getDeck())
        })

        test('passes no cards to the hand', () => {
            expect(hand().props.cards).toEqual([])
        })

        test('sets the deck to hidden', () => {
            expect(deck().props.revealed).toEqual(false)
        })

        test('renders a draw button', () => {
            expect(drawButton()).toHaveLength(1)
        })

        test('renders a shuffle button', () => {
            expect(shuffleButton()).toHaveLength(1)
        })

        test('sets shuffle button to enabled', () => {
            expect(shuffleButton().prop('disabled')).toBeFalsy()
        })

        test('sets reset button to disabled', () => {
            expect(resetButton().prop('disabled')).toBeTruthy()
        })

        test('renders a reset button', () => {
            expect(resetButton()).toHaveLength(1)
        })

        test('renders a reveal button', () => {
            expect(revealButton()).toHaveLength(1)
        })

        test('does not render a hide button', () => {
            expect(hideButton()).toHaveLength(0)
        })

        describe('when clicking the draw button', () => {
            beforeEach(() => {
                drawButton().simulate('click')
            })

            test('removes the last card from the deck', () => {
                expect(deck().props.cards).toEqual(getDeck().slice(0, -1))
            })

            test('adds the card to the hand', () => {
                expect(hand().props.cards).toEqual([
                    getDeck().slice(-1)[0],
                ])
            })

            test('sets shuffle button to disabled', () => {
                expect(shuffleButton().prop('disabled')).toBeTruthy()
            })

            test('sets reset button to enabled', () => {
                expect(resetButton().prop('disabled')).toBeFalsy()
            })

            describe('when clicking the reset button', () => {
                beforeEach(() => {
                    resetButton().simulate('click')
                })

                test('sets the deck to the initial value', () => {
                    expect(deck().props.cards).toEqual(getDeck())
                })

                test('clears the hand', () => {
                    expect(hand().props.cards).toEqual([])
                })

                test('sets shuffle button to enabled', () => {
                    expect(shuffleButton().prop('disabled')).toBeFalsy()
                })

                test('sets reset button to disabled', () => {
                    expect(resetButton().prop('disabled')).toBeTruthy()
                })
            })
        })

        describe('when clicking the shuffle button', () => {
            let previousOrder

            beforeEach(() => {
                previousOrder = deck().props.cards
                shuffleButton().simulate('click')
            })

            test('sets a new random order', () => {
                expect(deck().props.cards).not.toEqual(previousOrder)
            })
        })

        describe('when clicking reveal deck button', () => {
            beforeEach(() => {
                revealButton().simulate('click')
            })

            test('sets the deck to revealed', () => {
                expect(deck().props.revealed).toEqual(true)
            })

            test('renders a hide button', () => {
                expect(hideButton()).toHaveLength(1)
            })

            test('does not render a reveal button', () => {
                expect(revealButton()).toHaveLength(0)
            })

            describe('when clicking hide deck button', () => {
                beforeEach(() => {
                    hideButton().simulate('click')
                })

                test('sets the deck to hidden', () => {
                    expect(deck().props.revealed).toEqual(false)
                })

                test('renders a reveal button', () => {
                    expect(revealButton()).toHaveLength(1)
                })

                test('does not render a hide button', () => {
                    expect(hideButton()).toHaveLength(0)
                })
            })
        })
    })
})
