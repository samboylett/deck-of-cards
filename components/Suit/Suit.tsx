import styled from 'styled-components'
import type { CardSuit } from '../../types/CardSuit'
import { getSuitOptions } from '../../features/cards/cards'

export interface SuitProps {
    suit: CardSuit
}

export const Suit = styled<SuitProps, 'div'>('div')`
    color: ${ ({ suit }) => getSuitOptions(suit).color };

    &::before {
        content: '\\${ ({ suit }) => getSuitOptions(suit).symbol }';
    }
`
