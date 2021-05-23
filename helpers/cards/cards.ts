import type Cards from '../../types/Cards'
import type Card from '../../types/Card'
import { cardSuits } from '../../types/CardSuit'
import { cardValues } from '../../types/CardValue'

/**
 * Generate an ordered deck of cards.
 */
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

/**
 * Get a cards image alt text.
 */
export function getImageAlt(card: Card|null): string {
    return card
        ? `${ card.value } of ${ card.suit }`
        : 'Back of card'
}

/**
 * Get a cards image file name.
 */
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

/**
 * Get a cards image URL path.
 */
export function getImageURLPath(card: Card|null): string {
    return `/cards/${ getImageFileName(card) }`
}

/**
 * Pre-load all the deck images.
 */
export function loadDeck(): Promise<Array<unknown>> {
    return Promise.all(
        [
            null,
            ...getDeck(),
        ].map(card => new Promise((resolve, reject) => {
            const path = getImageURLPath(card)
            const image = new Image()
            image.src = path
            image.onload = resolve
            image.onerror = reject
        }))
    )
}
