import { getImageFileName } from './cards'

describe('helpers/cards', () => {
    describe('getImageFileName', () => {
        test('is a function', () => {
            expect(getImageFileName).toEqual(expect.any(Function))
        })
    })

    describe.each([
        ['back of a card', null, 'blue_back'],
        ['ace of spades', { suit: 'Spades', value: 'Ace' }, 'AS'],
        ['ace of spades with value as a number', { suit: 'Spades', value: '0' }, 'AS'],
        ['2 of spades', { suit: 'Spades', value: 'Two' }, '2S'],
        ['10 of spades', { suit: 'Spades', value: 'Ten' }, '10S'],
        ['king of spades', { suit: 'Spades', value: 'King' }, 'KS'],
        ['jack of spades', { suit: 'Spades', value: 'Jack' }, 'JS'],
        ['jack of spades with value as a number', { suit: 'Spades', value: '10' }, 'JS'],
    ])('when passing a %s', (_, card, expected) => {
        test('returns the URL path to the correct image', () => {
            const src = getImageFileName(card)

            expect(src).toEqual(`${ expected }.jpg`)
        })
    })
})
