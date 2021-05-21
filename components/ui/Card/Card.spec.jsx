import React from 'react'
import { shallow } from 'enzyme'
import { Card } from './Card'

jest.mock('svg-cards/svg-cards.svg', () => 'svg-cards.svg')

describe('Card', () => {
    let wrapper

    describe.each([
        ['back of a card', null, 'back'],
        ['ace of spades', { suit: 'Spades', value: 'Ace' }, 'spade_1'],
        ['ace of spades with value as a number', { suit: 'Spades', value: '0' }, 'spade_1'],
        ['2 of spades', { suit: 'Spades', value: 'Two' }, 'spade_2'],
        ['10 of spades', { suit: 'Spades', value: 'Ten' }, 'spade_10'],
        ['king of spades', { suit: 'Spades', value: 'King' }, 'spade_king'],
        ['jack of spades', { suit: 'Spades', value: 'Jack' }, 'spade_jack'],
        ['jack of spades with value as a number', { suit: 'Spades', value: '10' }, 'spade_jack'],
    ])('when rendering the %s', (_, card, expected) => {
        beforeEach(() => {
            wrapper = shallow(<Card card={ card } />)
        })

        test('renders an svg', () => {
            expect(wrapper.exists('svg')).toBe(true)
        })

        test('sets the svg use href to the correct svg image', () => {
            const href = wrapper.find('svg use').prop('href')

            expect(href).toEqual(`svg-cards.svg#${ expected }`)
        })
    })
})
