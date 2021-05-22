import React from 'react'
import Image from 'next/image'

import type CardType from '../../../types/Card'
import CardValue from '../../../types/CardValue'
import CardSuit from '../../../types/CardSuit'

export interface CardImageProps {
    card: CardType|null
}

function getImage(card: CardType|null) {
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

export function CardImage({ card }: CardImageProps) {
    const imageSource = `/cards/${ getImage(card) }`
    const imageAlt = card
        ? `${ card.value } of ${ card.suit }`
        : 'Back of card'

    return (
        <Image
            src={ imageSource }
            alt={ imageAlt }
            layout="fill"
        />
    );
}
