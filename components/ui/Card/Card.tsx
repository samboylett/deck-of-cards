import React from 'react'
import styled from 'styled-components'
import type CardType from '../../../types/Card'
import { CardImage } from '../CardImage/CardImage'

export interface CardProps {
    card: CardType
    revealed: Boolean
}

const CardImageWrapper = styled.div`
    margin: -4px;
    width: 187px;
    max-width: 50vw;
`

const CardFace = styled.div`
    transform-style: preserve-3d;
    backface-visibility: hidden;
    line-height: 0;
    border-radius: 21px;
    border: 2px solid rgba(214, 224, 225, 1);
    overflow: hidden;

    &:last-child {
        transform: rotateY(180deg);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
`

interface CardContainerProps {
    revealed: Boolean
}

const CardContainer = styled.div<CardContainerProps>`
    display: inline-block;
    position: relative;
    transform: translateZ(0) rotateY(${ ({ revealed }) => revealed ? '0' : '180'}deg);
    transition: transform .7s ease;
    transform-style: preserve-3d;
    backface-visibility: visible;
    will-change: transform;
    perspective: 100px;
`

export function Card({ card, revealed = false }: CardProps) {
    return (
        <CardContainer revealed={ revealed }>
            <CardFace>
                <CardImageWrapper>
                    <CardImage card={ card } />
                </CardImageWrapper>
            </CardFace>

            <CardFace>
                <CardImageWrapper>
                    <CardImage card={ null } />
                </CardImageWrapper>
            </CardFace>
        </CardContainer>
    );
}
