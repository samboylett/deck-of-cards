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
    backface-visibility: visible;

    &:last-child {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: rotateY(180deg);
    }
`

const Card3DContainer = styled.div`
    position: relative;
    transform: rotateY(${ ({ revealed }) => revealed ? '0' : '180'}deg);
    transition: transform .7s ease;
    transform-style: preserve-3d;
    backface-visibility: visible;
    display: inline-block;
    will-change: transform;
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
