import React from 'react'

import { Suit } from '../Suit/Suit'
import type CardType from '../../../types/Card'
import CardValue from '../../../types/CardValue'

export interface CardProps {
    card: CardType|null
}

function getSvgImage(card: CardType|null) {
    if (!card) {
        return 'back-blue.png';
    }

    const suit = card.suit.toLowerCase().slice(0, -1);
    const value: Number = parseInt(
        isNaN(parseInt(card.value))
            ? CardValue[card.value]
            : card.value
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
