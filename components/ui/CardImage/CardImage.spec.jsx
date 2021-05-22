import React from 'react'
import { shallow } from 'enzyme'
import Image from 'next/image'

import { CardImage } from './CardImage'
import { getImageURLPath, getImageAlt } from '../../../helpers/cards/cards'

describe('CardImage', () => {
    let wrapper

    describe.each([
        ['back of a card', null],
        ['ace of spades', { suit: 'Spades', value: 'Ace' }],
        ['ace of spades with value as a number', { suit: 'Spades', value: '0' }],
        ['2 of spades', { suit: 'Spades', value: 'Two' }],
        ['10 of spades', { suit: 'Spades', value: 'Ten' }],
        ['king of spades', { suit: 'Spades', value: 'King' }],
        ['jack of spades', { suit: 'Spades', value: 'Jack' }],
        ['jack of spades with value as a number', { suit: 'Spades', value: '10' }],
    ])('when rendering the %s', (_, card) => {
        beforeEach(() => {
            wrapper = shallow(<CardImage card={ card } />)
        })

        test('renders an img', () => {
            expect(wrapper.exists(Image)).toBe(true)
        })

        test('sets the img src to the return value of getImageURLPath', () => {
            const src = wrapper.find(Image).prop('src')

            expect(src).toEqual(getImageURLPath(card))
        })

        test('sets the img alt to the return value of getImageAlt', () => {
            const alt = wrapper.find(Image).prop('alt')

            expect(alt).toEqual(getImageAlt(card))
        })
    })
})
