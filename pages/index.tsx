import React from 'react'
import Head from 'next/head'
import { DeckTemplate } from '../components/templates/DeckTemplate/DeckTemplate'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Deck of Cards</title>
            </Head>

            <main>
                <DeckTemplate
                    initialDeck={[
                        { suit: 'Diamonds', value: 'Ace' },
                        { suit: 'Spades', value: 'Ace' },
                        { suit: 'Hearts', value: 'Ace' },
                        { suit: 'Diamonds', value: 'King' },
                        { suit: 'Spades', value: 'King' },
                    ]}
                />
            </main>
        </div>
    )
}
