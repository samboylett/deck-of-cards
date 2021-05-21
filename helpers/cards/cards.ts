import type Card from '../../types/Card'
import CardSuit from '../../types/CardSuit'
import CardValue from '../../types/CardValue'

export function getDeck(): Array<Card> {
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
