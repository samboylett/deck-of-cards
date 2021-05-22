import React from 'react'
import Head from 'next/head'
import { Layout } from '../components/templates/Layout/Layout'
import { DeckPage } from '../components/pages/DeckPage/DeckPage'

export default function Home(): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>Deck of Cards</title>
            </Head>

            <DeckPage />
        </Layout>
    )
}
