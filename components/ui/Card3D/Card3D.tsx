import React from 'react'
import styled from 'styled-components'
import type CardType from '../../../types/Card'
import { Card } from '../Card/Card'

export interface Card3DProps {
    card: CardType
    revealed: Boolean
}

const CardFace = styled.div`
    transform-style: preserve-3d;
    backface-visibility: hidden;
    grid-column: 1;
    grid-row: 1;

    &:last-child {
        transform: rotateY(180deg);
    }
`

const Card3DContainer = styled.div`
    display: inline-grid;
    grid-template-columns: auto;
    grid-template-rows: auto;

    transform: translateZ(0) rotateY(${ ({ revealed }) => revealed ? '0' : '180'}deg);
    transition: transform .7s ease;
    transform-style: preserve-3d;
    backface-visibility: visible;
    will-change: transform;
    perspective: 100px;
`

export function Card3D({ card, revealed = false }: Card3DProps) {
    return (
        <Card3DContainer revealed={ revealed }>
            <CardFace>
                <Card card={ card } />
            </CardFace>

            <CardFace>
                <Card card={ null } />
            </CardFace>
        </Card3DContainer>
    );
}
