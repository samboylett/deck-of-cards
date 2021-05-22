import React from 'react'
import type CardType from '../../../types/Card'
import { CardImage } from '../CardImage/CardImage'

import { CardContainer } from './CardContainer'
import { CardFace } from './CardFace'
import { CardImageWrapper } from './CardImageWrapper'

export interface CardProps {
    card: CardType
    revealed: boolean
}

export function Card({ card, revealed = false }: CardProps): JSX.Element {
    return (
        <CardContainer revealed={ revealed }>
            <CardFace>
                <CardImageWrapper>
                    <CardImage card={ card } />
                </CardImageWrapper>
            </CardFace>

            <CardFace>
                <CardImageWrapper>
                    <CardImage card={ null } />
                </CardImageWrapper>
            </CardFace>
        </CardContainer>
    );
}
