import type Cards from '../../types/Cards'
import type Card from '../../types/Card'
import CardSuit from '../../types/CardSuit'
import CardValue from '../../types/CardValue'

export function getDeck(): Cards {
    return Object.values(CardValue)
        .filter(e => isNaN(parseInt(e.toString())))
        .flatMap(value => {
            return Object.values(CardSuit)
                .filter(e => isNaN(parseInt(e.toString())))
                .map(suit => ({
                    value: value as unknown as CardValue,
                    suit: suit as unknown as CardSuit,
                }))
        })
}

export function getImageAlt(card: Card|null): string {
    return card
        ? `${ card.value } of ${ card.suit }`
        : 'Back of card'
}

export function getImageFileName(card: Card|null): string {
    if (!card) {
        return 'blue_back.jpg';
    }

    const suitString = isNaN(parseInt(card.suit.toString()))
        ? card.suit
        : CardSuit[card.suit]

    const suitLetter = suitString.toString().toUpperCase()[0]

    const value: number = parseInt(
        (
            isNaN(parseInt(card.value.toString()))
                ? CardValue[card.value]
                : card.value
        ).toString()
    ) + 1

    const imageValue = {
        1: 'A',
        11: 'J',
        12: 'Q',
        13: 'K',
    }[value] || value

    return `${ imageValue }${ suitLetter }.jpg`
}

export function getImageURLPath(card: Card|null): string {
    return `/cards/${ getImageFileName(card) }`
}
