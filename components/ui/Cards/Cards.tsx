import React from 'react'
import styled from 'styled-components'
import type CardType from '../../../types/Card'
import { Card3D } from '../Card3D/Card3D';

export interface CardsProps {
    cards: Array<CardType>
    overlap: String
    revealed: Boolean
}

const CardsContainer = styled.div`
    display: flex;
    align-content: center;
`

const CardContainer = styled.div`
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
                        <Card3D
                            card={ card }
                            revealed={ revealed }
                        />
                    </CardContainer>
                ))
            }
        </CardsContainer>
    )
}
