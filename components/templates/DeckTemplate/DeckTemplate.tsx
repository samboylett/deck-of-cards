import React from 'react'
import styled from 'styled-components'
import type CardType from '../../../types/Card'
import { Cards } from '../../ui/Cards/Cards';

export interface DeckTemplateProps {
    initialDeck: Array<CardType>
}

interface DeckTemplateState {
    deck: Array<CardType>
}

const Layout = styled.div`
    padding: 30px;
`

export class DeckTemplate extends React.Component<DeckTemplateProps, DeckTemplateState> {
    constructor(props: DeckTemplateProps) {
        super(props)

        this.state = {
            deck: props.initialDeck,
            revealedDeck: false,
        }
    }

    toggleReveal = () => {
        this.setState({
            revealedDeck: !this.state.revealedDeck,
        })
    }

    render() {
        return (
            <Layout>
                <h1>Deck of Cards</h1>

                <h2>Your deck</h2>

                <button onClick={ this.toggleReveal }>
                    { this.state.revealedDeck ? 'Hide' : 'Reveal' } Deck
                </button>

                <Cards
                    cards={ this.state.deck }
                    revealed={ this.state.revealedDeck }
                    overlap="1.5%"
                />
            </Layout>
        )
    }
}
