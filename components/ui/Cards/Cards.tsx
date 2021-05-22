import React from 'react'
import styled from 'styled-components'
import FlipMove from 'react-flip-move'

import type CardsType from '../../../types/Cards'
import { Card } from '../Card/Card';

import { CardContainer } from './CardContainer'
import { CardsContainer } from './CardsContainer'

export interface CardsProps {
    cards: CardsType
    overlap: string
    revealed: Boolean
}

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
