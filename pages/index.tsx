import React from 'react'
import Head from 'next/head'
import { Layout } from '../components/templates/Layout/Layout'
import { DeckTemplate } from '../components/templates/DeckTemplate/DeckTemplate'
import { getDeck } from '../helpers/cards/cards'

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Deck of Cards</title>
            </Head>

            <DeckTemplate initialDeck={ getDeck() } />
        </Layout>
    )
}
