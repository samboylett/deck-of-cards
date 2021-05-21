import React from 'react'
import Head from 'next/head'
import { DeckTemplate } from '../components/templates/DeckTemplate/DeckTemplate'
import { getDeck } from '../helpers/cards/cards'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Deck of Cards</title>
            </Head>

            <main>
                <DeckTemplate initialDeck={ getDeck() } />
            </main>
        </div>
    )
}
