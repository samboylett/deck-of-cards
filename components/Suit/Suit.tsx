import styled from 'styled-components';
import type { CardSuit } from '../../types/CardSuit';

const suits = [
    {
        name: 'Hearts',
        symbol: 2665,
        color: 'red',
    },

    {
        name: 'Clubs',
        symbol: 2663,
        color: 'black',
    },

    {
        name: 'Diamonds',
        symbol: 2666,
        color: 'red',
    },

    {
        name: 'Spades',
        symbol: 2660,
        color: 'black',
    },
];

export interface SuitProps {
    suit: CardSuit
}

function getSuitOptions(suit) {
    return suits.find(({ name }) => name === suit);
}

export const Suit = styled<SuitProps, 'div'>('div')`
    color: ${ ({ suit }) => getSuitOptions(suit).color };

    &::before {
        content: '\\${ ({ suit }) => getSuitOptions(suit).symbol }';
    }
`
