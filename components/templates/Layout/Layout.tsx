import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    margin-bottom: 20px;
    color: #eee;
    background: #111;
    padding: 10px;
    text-align: center;
    font-size: 2em;
`

export function Layout({ children }: React.PropsWithChildren<{}>) {
    return (
        <div>
            <Header>
                Deck of Cards
            </Header>

            <main>
                { children }
            </main>
        </div>
    )
}
