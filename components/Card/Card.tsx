import styled from 'styled-components'
import { Suit } from '../Suit/Suit'
import { getCardSymbol, getSuitOptions } from '../../features/cards/cards'
import type { Card as CardType } from '../../types/Card'

export interface CardProps {
    card: CardType
}

export const Card = styled<CardProps, 'div'>('div')`
    color: ${ ({ card }) => getSuitOptions(card.suit).color };

    &::before {
        content: '\\${ ({ card }) => getCardSymbol(card) }';
    }
`
