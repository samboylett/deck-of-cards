import React from 'react'
import styled from 'styled-components'
import type CardType from '../../../types/Card'
import { CardImage } from '../CardImage/CardImage'

import { CardContainer } from './CardContainer'
import { CardFace } from './CardFace'
import { CardImageWrapper } from './CardImageWrapper'

export interface CardProps {
    card: CardType
    revealed: Boolean
}

export function Card({ card, revealed = false }: CardProps) {
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
