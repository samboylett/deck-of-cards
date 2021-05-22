import type Cards from '../../types/Cards'
import type Card from '../../types/Card'
import { cardSuits } from '../../types/CardSuit'
import { cardValues } from '../../types/CardValue'

export function getDeck(): Cards {
    return cardSuits
        .flatMap(
            suit => cardValues
                .map(value => ({
                    value,
                    suit,
                }))
        )
}

export function getImageAlt(card: Card|null): string {
    return card
        ? `${ card.value } of ${ card.suit }`
        : 'Back of card'
}

export function getImageFileName(card: Card|null): string {
    if (!card) {
        return 'blue_back.jpg'
    }

    const suitLetter = card.suit.toUpperCase()[0]

    const value: number = cardValues.findIndex(v => v === card.value) + 1

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
