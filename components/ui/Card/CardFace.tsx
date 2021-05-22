import styled from 'styled-components'

export const CardFace = styled.div`
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
