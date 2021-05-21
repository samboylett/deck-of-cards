import React from 'react'
import styled from 'styled-components'
import type CardType from '../../../types/Card'
import { Card } from '../Card/Card'

export interface Card3DProps {
    card: CardType
    revealed: Boolean
}

const Card3DContainer = styled.div`
    position: relative;
    transform: rotateY(${ ({ revealed }) => revealed ? '0' : '180'}deg);
    transition: transform .7s ease;
    transform-style: preserve-3d;
    backface-visibility: visible;
    display: inline-block;
    will-change: transform;

    svg {
        transform-style: preserve-3d;
        backface-visibility: visible;

        &:first-child {
            z-index: 1;
        }

        &:last-child {
            z-index: 1;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transform: rotateY(180deg);
        }
    }
`

export function Card3D({ card, revealed = false }: Card3DProps) {
    return (
        <Card3DContainer revealed={ revealed }>
            <Card card={ card } />
            <Card card={ null } />
        </Card3DContainer>
    );
}
