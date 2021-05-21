import React from 'react'
import styled from 'styled-components'
import shuffle from 'lodash.shuffle'

import type CardType from '../../../types/Card'
import { Cards } from '../../ui/Cards/Cards';

export interface DeckTemplateProps {
    initialDeck: Array<CardType>
}

interface DeckTemplateState {
    deck: Array<CardType>
    hand: Array<CardType>
    revealedDeck: Boolean
}

const Layout = styled.div`
    padding: 30px;
`

export class DeckTemplate extends React.Component<DeckTemplateProps, DeckTemplateState> {
    constructor(props: DeckTemplateProps) {
        super(props)

        this.state = {
            deck: props.initialDeck,
            hand: [],
            revealedDeck: false,
        }
    }

    toggleReveal = () => {
        this.setState({
            revealedDeck: !this.state.revealedDeck,
        })
    }

    shuffle = () => {
        this.setState({
            deck: shuffle(this.state.deck),
        })
    }

    draw = () => {
        this.setState({
            hand: [
                ...this.state.hand,
                this.state.deck.slice(-1)[0],
            ],

            deck: this.state.deck.slice(0, -1),
        })
    }

    reset = () => {
        this.setState({
            deck: this.props.initialDeck,
            hand: [],
        })
    }

    get canShuffle(): Boolean {
        return this.state.deck.length === 52
    }

    get canDraw(): Boolean {
        return Boolean(this.state.deck.length)
    }

    get canReset(): Boolean {
        return Boolean(this.state.hand.length)
    }

    render() {
        return (
            <Layout>
                <h1>Deck of Cards</h1>

                <button onClick={ this.toggleReveal }>
                    { this.state.revealedDeck ? 'Hide' : 'Reveal' } Deck
                </button>

                <button
                    disabled={ !this.canShuffle }
                    onClick={ this.shuffle }
                >
                    Shuffle
                </button>

                <button
                    disabled={ !this.canDraw }
                    onClick={ this.draw }
                >
                    Draw
                </button>

                <button
                    disabled={ !this.canReset }
                    onClick={ this.reset }
                >
                    Reset
                </button>

                <h2>Your deck</h2>

                <Cards
                    cards={ this.state.deck }
                    revealed={ this.state.revealedDeck }
                    overlap="1.5%"
                />

                <h2>Your Hand</h2>

                <Cards
                    cards={ this.state.hand }
                    revealed={ true }
                    overlap="1.5%"
                />
            </Layout>
        )
    }
}
