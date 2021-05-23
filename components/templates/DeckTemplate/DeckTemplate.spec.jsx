import React from 'react'
import { mount } from 'enzyme'

import { DeckTemplate } from './DeckTemplate'
import { Cards } from '../../ui/Cards/Cards'
import { Button, Message, Loader } from 'semantic-ui-react'
import { getDeck } from '../../../helpers/cards/cards'

describe('DeckTemplate', () => {
    let wrapper
    let callbacks

    const deck = () => wrapper.find(Cards).get(0)
    const hand = () => wrapper.find(Cards).get(1)
    const revealButton = () => wrapper.find(Button).filterWhere(b => b.text() === 'Reveal Deck')
    const hideButton = () => wrapper.find(Button).filterWhere(b => b.text() === 'Hide Deck')
    const shuffleButton = () => wrapper.find(Button).filterWhere(b => b.text() === 'Shuffle')
    const drawButton = () => wrapper.find(Button).filterWhere(b => b.text() === 'Draw')
    const resetButton = () => wrapper.find(Button).filterWhere(b => b.text() === 'Reset')

    const callbackTests = (array) => {
        describe.each(array)('when clicking the %s button', (_, getButton, callbackName) => {
            beforeEach(() => {
                getButton().simulate('click')
            })

            test(`calls the ${ callbackName } callback`, () => {
                expect(callbacks[callbackName]).toHaveBeenCalled()
            })
        })
    }

    describe('when rendered', () => {
        beforeEach(() => {
            callbacks = {
                onToggleReveal: jest.fn(),
                onShuffle: jest.fn(),
                onDraw: jest.fn(),
                onReset: jest.fn(),
            }
            wrapper = mount(
                <DeckTemplate
                    deck={ getDeck() }
                    hand={ [] }
                    revealedDeck={ false }
                    { ...callbacks }
                />
            )
        })

        test('passes the deck cards to the deck', () => {
            expect(deck().props.cards).toEqual(getDeck())
        })

        test('passes the hand cards to the hand', () => {
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

        test('sets the deck to hidden', () => {
            expect(deck().props.revealed).toEqual(false)
        })

        callbackTests([
            ['draw', drawButton, 'onDraw'],
            ['reveal', revealButton, 'onToggleReveal'],
            ['shuffle', shuffleButton, 'onShuffle'],
        ])
    })

    describe('when deck revealed', () => {
        beforeEach(() => {
            callbacks = {
                onToggleReveal: jest.fn(),
                onShuffle: jest.fn(),
                onDraw: jest.fn(),
                onReset: jest.fn(),
            }
            wrapper = mount(
                <DeckTemplate
                    deck={ getDeck() }
                    hand={ [] }
                    revealedDeck={ true }
                    { ...callbacks }
                />
            )
        })

        test('sets the deck to visible', () => {
            expect(deck().props.revealed).toEqual(true)
        })

        test('does not render a reveal button', () => {
            expect(revealButton()).toHaveLength(0)
        })

        test('renders a hide button', () => {
            expect(hideButton()).toHaveLength(1)
        })

        callbackTests([
            ['hide', hideButton, 'onToggleReveal'],
        ])
    })

    describe('when cards in hand', () => {
        beforeEach(() => {
            callbacks = {
                onToggleReveal: jest.fn(),
                onShuffle: jest.fn(),
                onDraw: jest.fn(),
                onReset: jest.fn(),
            }
            wrapper = mount(
                <DeckTemplate
                    deck={ [] }
                    hand={ getDeck() }
                    revealedDeck={ false }
                    { ...callbacks }
                />
            )
        })

        test('sets shuffle button to disabled', () => {
            expect(shuffleButton().prop('disabled')).toBeTruthy()
        })

        test('sets reset button to enabled', () => {
            expect(resetButton().prop('disabled')).toBeFalsy()
        })

        callbackTests([
            ['reset', resetButton, 'onReset'],
        ])
    })

    describe('when loading', () => {
        beforeEach(() => {
            wrapper = mount(
                <DeckTemplate
                    deck={ [] }
                    hand={ getDeck() }
                    revealedDeck={ false }
                    loading
                />
            )
        })

        test('renders a Loader', () => {
            expect(wrapper.find(Loader)).toHaveLength(1)
        })
    })

    describe('when errored', () => {
        beforeEach(() => {
            wrapper = mount(
                <DeckTemplate
                    deck={ [] }
                    hand={ getDeck() }
                    revealedDeck={ false }
                    errored
                />
            )
        })

        test('renders a Message', () => {
            expect(wrapper.find(Message)).toHaveLength(1)
        })
    })
})
