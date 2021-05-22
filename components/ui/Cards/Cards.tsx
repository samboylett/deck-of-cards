import React from 'react'
import styled from 'styled-components'
import FlipMove from 'react-flip-move'

import type CardsType from '../../../types/Cards'
import { Card } from '../Card/Card';

export interface CardsProps {
    cards: CardsType
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
    revealed: Boolean
}

const CardContainer = styled.div<CardContainerProps>`
    width: ${ ({ overlap }) => overlap || '5px' };
    overflow: visible;
    transition: width 0.5s ease;

    ${ ({ revealed }) => revealed && `
        &:hover {
            width: 100px;
            max-width: 40vw;
        }
    ` }
`

export function Cards({ cards, overlap, revealed }: CardsProps) {
    return (
        <CardsContainer>
            {
                cards.map((card, index) => (
                    <CardContainer
                        key={ card ? [card.suit, card.value].join('-') : index }
                        overlap={ overlap }
                        revealed={ revealed }
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
