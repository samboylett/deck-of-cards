import React from 'react'

import type CardsType from '../../../types/Cards'
import { Card } from '../Card/Card'

import { CardContainer } from './CardContainer'
import { CardsContainer } from './CardsContainer'

export interface CardsProps {
    cards: CardsType
    overlap: string
    revealed: boolean
}

export function Cards({ cards, overlap, revealed }: CardsProps): JSX.Element {
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
