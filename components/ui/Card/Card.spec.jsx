import React from 'react'
import { shallow } from 'enzyme'
import { Card } from './Card'
import { CardImage } from '../CardImage/CardImage'
import { CardContainer } from './CardContainer'

describe('Card', () => {
    let wrapper

    describe('when rendered', () => {
        beforeEach(() => {
            wrapper = shallow(<Card card={ { suit: 'Spades', value: 'Ace' } } />)
        })

        test('passes null to second CardImage', () => {
            expect(wrapper.find(CardImage).get(1).props.card).toBe(null)
        })

        test('passes card to first CardImage', () => {
            expect(wrapper.find(CardImage).get(0).props.card).toEqual({ suit: 'Spades', value: 'Ace' })
        })

        test('sets CardContainer revealed to false', () => {
            expect(wrapper.find(CardContainer).prop('revealed')).toBe(false)
        })
    })

    describe('when rendered with revealed prop set to true', () => {
        beforeEach(() => {
            wrapper = shallow(<Card card={ { suit: 'Spades', value: 'Ace' } } revealed />)
        })

        test('sets CardContainer revealed to true', () => {
            expect(wrapper.find(CardContainer).prop('revealed')).toBe(true)
        })
    })
})
