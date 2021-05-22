import { getImageURLPath, getImageAlt } from './cards'

describe('helpers/cards', () => {
    describe('getImageURLPath', () => {
        test('is a function', () => {
            expect(getImageURLPath).toEqual(expect.any(Function))
        })

        describe.each([
            ['back of a card', null, 'blue_back'],
            ['ace of spades', { suit: 'Spades', value: 'Ace' }, 'AS'],
            ['2 of spades', { suit: 'Spades', value: 'Two' }, '2S'],
            ['10 of spades', { suit: 'Spades', value: 'Ten' }, '10S'],
            ['king of spades', { suit: 'Spades', value: 'King' }, 'KS'],
            ['jack of spades', { suit: 'Spades', value: 'Jack' }, 'JS'],
        ])('when passing a %s', (_, card, expected) => {
            test('returns the URL path to the correct image', () => {
                const src = getImageURLPath(card)

                expect(src).toEqual(`/cards/${ expected }.jpg`)
            })
        })
    })

    describe('getImageAlt', () => {
        test('is a function', () => {
            expect(getImageAlt).toEqual(expect.any(Function))
        })

        describe.each([
            ['Back of card', null],
            ['Ace of Spades', { suit: 'Spades', value: 'Ace' }],
            ['Two of Spades', { suit: 'Spades', value: 'Two' }],
            ['Ten of Spades', { suit: 'Spades', value: 'Ten' }],
            ['King of Spades', { suit: 'Spades', value: 'King' }],
            ['Jack of Spades', { suit: 'Spades', value: 'Jack' }],
        ])('when passing a %s', (expected, card) => {
            test('returns a meaningful alt message', () => {
                const alt = getImageAlt(card)

                expect(alt).toEqual(expected)
            })
        })
    })
})
