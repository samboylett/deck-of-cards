import React from 'react'

import { LayoutHeader } from './LayoutHeader'

export interface LayoutProps {
    children: React.ReactNode
}

export function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <div>
            <LayoutHeader>
                Deck of Cards
            </LayoutHeader>

            <main>
                { children }
            </main>
        </div>
    )
}
