import type Card from '../../types/Card'
import CardSuit from '../../types/CardSuit'
import CardValue from '../../types/CardValue'

export function getDeck() {
    return Object.keys(CardValue)
        .filter(e => isNaN(parseInt(e)))
        .flatMap(value => {
            return Object.keys(CardSuit)
                .filter(e => isNaN(parseInt(e)))
                .map(suit => ({
                    value,
                    suit,
                }))
        })
}
