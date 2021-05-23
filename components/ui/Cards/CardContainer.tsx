import styled from 'styled-components'

interface CardContainerProps {
    overlap: string
    revealed: boolean
}

export const CardContainer = styled.div<CardContainerProps>`
    width: ${ ({ overlap }) => overlap };
    overflow: visible;
    transition: width 0.5s ease;

    ${ ({ revealed }) => revealed && `
        &:hover {
            width: 100px;
            max-width: 40vw;
        }
    ` }
`
