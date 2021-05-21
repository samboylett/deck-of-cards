import styled from 'styled-components'
import type { Card as CardType } from '../../types/Card'
import { Card } from '../Card/Card';

export interface CardsProps {
    cards: Array<CardType>
    overlap: String
}

const CardsContainer = styled.div`
    display: flex;
    align-content: center;
`

const CardContainer = styled.div`
    width: ${ ({ overlap }) => overlap || '5px' };
    overflow: visible;
`

export function Cards({ cards, overlap }: CardsProps) {
    return (
        <CardsContainer>
            {
                cards.map((card, index) => (
                    <CardContainer
                        key={ index }
                        overlap={ overlap }
                    >
                        <Card card={ card } />
                    </CardContainer>
                ))
            }
        </CardsContainer>
    )
}
