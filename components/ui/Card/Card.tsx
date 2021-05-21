import React from 'react'

import type CardType from '../../../types/Card'
import CardValue from '../../../types/CardValue'

export interface CardProps {
    card: CardType|null
}

function getSvgImage(card: CardType|null) {
    if (!card) {
        return 'back-blue.png';
    }

    const suit = card.suit.toString().toLowerCase().slice(0, -1);
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

export function Card({ card }: CardProps) {
    const imageName = `/api/card-image/${ getSvgImage(card) }`

    return (
        <img src={ imageName } />
    );
}
