import React from 'react'

import { LayoutHeader } from './LayoutHeader'

export function Layout({ children }: React.PropsWithChildren<Record<string, never>>): JSX.Element {
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
