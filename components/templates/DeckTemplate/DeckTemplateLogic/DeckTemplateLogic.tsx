import React from 'react'
import shuffle from 'lodash.shuffle'

import type CardType from '../../../../types/Card'
import { Cards } from '../../../ui/Cards/Cards';

export interface ViewProps {
    deck: Array<CardType>
    hand: Array<CardType>
    revealedDeck: boolean
    onToggleReveal: () => void
    onShuffle: () => void
    onDraw: () => void
    onReset: () => void
}

export interface DeckTemplateLogicProps {
    initialDeck: Array<CardType>
    View: (props: ViewProps) => any
}

interface DeckTemplateState {
    deck: Array<CardType>
    hand: Array<CardType>
    revealedDeck: boolean
}

export class DeckTemplateLogic extends React.Component<DeckTemplateLogicProps, DeckTemplateState> {
    constructor(props: DeckTemplateLogicProps) {
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

    render() {
        const { View } = this.props

        return (
            <View
                deck={ this.state.deck }
                hand={ this.state.hand }
                revealedDeck={ this.state.revealedDeck }
                onToggleReveal={ this.toggleReveal }
                onShuffle={ this.shuffle }
                onDraw={ this.draw }
                onReset={ this.reset }
            />
        )
    }
}
