import React from 'react'
import Image from 'next/image'

import type CardType from '../../../types/Card'
import { getImageURLPath, getImageAlt } from '../../../helpers/cards/cards'

export interface CardImageProps {
    card: CardType|null
}

export function CardImage({ card }: CardImageProps): JSX.Element {
    return (
        <Image
            src={ getImageURLPath(card) }
            alt={ getImageAlt(card) }
            width={187}
            height={286}
        />
    )
}
