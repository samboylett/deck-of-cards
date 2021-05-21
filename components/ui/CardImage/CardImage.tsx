import React from 'react'

import type CardType from '../../../types/Card'
import CardValue from '../../../types/CardValue'
import CardSuit from '../../../types/CardSuit'

export interface CardImageProps {
    card: CardType|null
}

function getImage(card: CardType|null) {
    if (!card) {
        return 'back-blue.png';
    }

    const suitString = isNaN(parseInt(card.suit.toString()))
        ? card.suit
        : CardSuit[card.suit]

    const suit = suitString.toString().toLowerCase().slice(0, -1);
    const value: number = parseInt(
        (
            isNaN(parseInt(card.value.toString()))
                ? CardValue[card.value]
                : card.value
        ).toString()
    )

    const svgValue = value < 10
        ? (value + 1)
        : CardValue[value].toLowerCase()

    return `${ suit }_${ svgValue }.png`
}

export function CardImage({ card }: CardImageProps) {
    const imageName = `/api/card-image/${ getImage(card) }`

    return (
        <img src={ imageName } />
    );
}
