import {
    getImageURLPath,
    getImageAlt,
    loadDeck,
} from './cards'

describe('helpers/cards', () => {
    describe('loadDeck', () => {
        test('is a function', () => {
            expect(loadDeck).toEqual(expect.any(Function))
        })

        describe('when called', () => {
            let retVal
            let onloads
            let onerrors

            beforeEach(() => {
                onloads = []
                onerrors = []

                Object.defineProperty(global.Image.prototype, 'src', {
                    set() {
                        onloads.push(() => this.onload())
                        onerrors.push(() => this.onerror())
                    },
                })

                retVal = loadDeck()
            })

            test('returns a promise', () => {
                expect(retVal).toEqual(expect.any(Promise))
            })

            test('creates 53 image loaders', () => {
                expect(onloads).toHaveLength(53)
            })

            describe('when all image loading resolves', () => {
                beforeEach(() => {
                    onloads.forEach(fn => fn())
                })

                test('returned promise resolves', async () => {
                    await expect(retVal).resolves.toEqual(expect.any(Array))
                })
            })

            describe('when any image loading errors', () => {
                beforeEach(() => {
                    onerrors[0]()
                })

                test('returned promise rejects', async () => {
                    await expect(retVal).rejects.toEqual(undefined)
                })
            })
        })
    })

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
