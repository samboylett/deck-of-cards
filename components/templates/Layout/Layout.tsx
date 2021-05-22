import React from 'react'

import { LayoutHeader } from './LayoutHeader'

export function Layout({ children }: React.PropsWithChildren<{}>) {
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
