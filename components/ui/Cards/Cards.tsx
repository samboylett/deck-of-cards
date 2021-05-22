import React from 'react'
import styled from 'styled-components'
import FlipMove from 'react-flip-move'

import type CardType from '../../../types/Card'
import { Card } from '../Card/Card';

export interface CardsProps {
    cards: Array<CardType>
    overlap: string
    revealed: Boolean
}

const CardsContainer = styled(FlipMove)`
    display: flex;
    align-content: center;
    margin-right: 187px;
`

interface CardContainerProps {
    overlap: string
}

const CardContainer = styled.div<CardContainerProps>`
    width: ${ ({ overlap }) => overlap || '5px' };
    overflow: visible;
    z-index: 1;
`

export function Cards({ cards, overlap, revealed }: CardsProps) {
    return (
        <CardsContainer>
            {
                cards.map((card, index) => (
                    <CardContainer
                        key={ card ? [card.suit, card.value].join('-') : index }
                        overlap={ overlap }
                    >
                        <Card
                            card={ card }
                            revealed={ revealed }
                        />
                    </CardContainer>
                ))
            }
        </CardsContainer>
    )
}
