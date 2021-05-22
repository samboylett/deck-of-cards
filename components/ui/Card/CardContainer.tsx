import styled from 'styled-components'

export interface CardContainerProps {
    revealed: Boolean
}

export const CardContainer = styled.div<CardContainerProps>`
    display: inline-block;
    position: relative;
    transform: translateZ(0) rotateY(${ ({ revealed }) => revealed ? '0' : '180'}deg);
    transition: transform .7s ease;
    transform-style: preserve-3d;
    backface-visibility: visible;
    will-change: transform;
    perspective: 100px;
`
