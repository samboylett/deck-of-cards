import React from 'react'
import styled from 'styled-components'
import shuffle from 'lodash.shuffle'
import {
    Container,
    Header,
    Button,
    Icon,
} from 'semantic-ui-react'

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
            <Container>
                <Button.Group>
                    <Button onClick={ this.toggleReveal }>
                        <Icon name={ this.state.revealedDeck ? 'hide' : 'unhide' } />
                        { this.state.revealedDeck ? 'Hide' : 'Reveal' } Deck
                    </Button>

                    <Button
                        disabled={ !this.canShuffle }
                        onClick={ this.shuffle }
                    >
                        <Icon name="shuffle" />
                        Shuffle
                    </Button>

                    <Button
                        disabled={ !this.canDraw }
                        onClick={ this.draw }
                    >
                        <Icon name="grab" />
                        Draw
                    </Button>

                    <Button
                        disabled={ !this.canReset }
                        onClick={ this.reset }
                    >
                        <Icon name="repeat" />
                        Reset
                    </Button>
                </Button.Group>

                <Header as="h2">Your deck</Header>

                <Cards
                    cards={ this.state.deck }
                    revealed={ this.state.revealedDeck }
                    overlap="1.5%"
                />

                <Header as="h2">Your Hand</Header>

                <Cards
                    cards={ this.state.hand }
                    revealed={ true }
                    overlap="1.5%"
                />
            </Container>
        )
    }
}
