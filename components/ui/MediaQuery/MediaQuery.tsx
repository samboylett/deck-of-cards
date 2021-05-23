import styled from 'styled-components'

export interface MediaQueryProps {
    minWidth?: number
    maxWidth?: number
}

export const MediaQuery = styled.div<MediaQueryProps>`
    ${ ({ minWidth }) => minWidth && `
        @media only screen and (max-width: ${ minWidth }px) {
            display: none;
        }
    ` }

    ${ ({ maxWidth }) => maxWidth && `
        @media only screen and (min-width: ${ maxWidth }px) {
            display: none;
        }
    ` }
`
