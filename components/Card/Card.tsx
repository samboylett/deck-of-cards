import styled from 'styled-components'
import { Suit } from '../Suit/Suit'
import { getCardSymbol, getCardColor } from '../../features/cards/cards'
import type { Card as CardType } from '../../types/Card'

export interface CardProps {
    card: CardType|null
}

export const Card = styled<CardProps, 'div'>('div')`
    color: ${ ({ card }) => getCardColor(card) };

    &::before {
        content: '\\${ ({ card }) => getCardSymbol(card) }';
    }
`
