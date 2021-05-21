import React from 'react'
import { shallow } from 'enzyme'
import { CardImage } from './CardImage'

describe('CardImage', () => {
    let wrapper

    describe.each([
        ['back of a card', null, 'back-blue'],
        ['ace of spades', { suit: 'Spades', value: 'Ace' }, 'spade_1'],
        ['ace of spades with value as a number', { suit: 'Spades', value: '0' }, 'spade_1'],
        ['2 of spades', { suit: 'Spades', value: 'Two' }, 'spade_2'],
        ['10 of spades', { suit: 'Spades', value: 'Ten' }, 'spade_10'],
        ['king of spades', { suit: 'Spades', value: 'King' }, 'spade_king'],
        ['jack of spades', { suit: 'Spades', value: 'Jack' }, 'spade_jack'],
        ['jack of spades with value as a number', { suit: 'Spades', value: '10' }, 'spade_jack'],
    ])('when rendering the %s', (_, card, expected) => {
        beforeEach(() => {
            wrapper = shallow(<CardImage card={ card } />)
        })

        test('renders an img', () => {
            expect(wrapper.exists('img')).toBe(true)
        })

        test('sets the img src to the correct image', () => {
            const src = wrapper.find('img').prop('src')

            expect(src).toEqual(`/api/card-image/${ expected }.png`)
        })
    })
})
