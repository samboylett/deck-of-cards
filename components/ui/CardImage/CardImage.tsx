import React from 'react'
import Image from 'next/image';

import type CardType from '../../../types/Card'
import CardValue from '../../../types/CardValue'
import CardSuit from '../../../types/CardSuit'

import { getImageURLPath } from '../../../helpers/cards/cards'

export interface CardImageProps {
    card: CardType|null
}

export function CardImage({ card }: CardImageProps) {
    const imageSource = getImageURLPath(card)
    const imageAlt = card
        ? `${ card.value } of ${ card.suit }`
        : 'Back of card'

    return (
        <Image
            src={ imageSource }
            alt={ imageAlt }
            width={187}
            height={286}
        />
    );
}
