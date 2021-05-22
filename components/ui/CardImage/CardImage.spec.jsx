import React from 'react'
import { shallow } from 'enzyme'
import Image from 'next/image'

import { CardImage } from './CardImage'

describe('CardImage', () => {
    let wrapper

    describe.each([
        ['back of a card', null, 'blue_back'],
        ['ace of spades', { suit: 'Spades', value: 'Ace' }, 'AS'],
        ['ace of spades with value as a number', { suit: 'Spades', value: '0' }, 'AS'],
        ['2 of spades', { suit: 'Spades', value: 'Two' }, '2S'],
        ['10 of spades', { suit: 'Spades', value: 'Ten' }, '10S'],
        ['king of spades', { suit: 'Spades', value: 'King' }, 'KS'],
        ['jack of spades', { suit: 'Spades', value: 'Jack' }, 'JS'],
        ['jack of spades with value as a number', { suit: 'Spades', value: '10' }, 'JS'],
    ])('when rendering the %s', (_, card, expected) => {
        beforeEach(() => {
            wrapper = shallow(<CardImage card={ card } />)
        })

        test('renders an img', () => {
            expect(wrapper.exists(Image)).toBe(true)
        })

        test('sets the img src to the correct image', () => {
            const src = wrapper.find(Image).prop('src')

            expect(src).toEqual(`/cards/${ expected }.jpg`)
        })
    })
})
