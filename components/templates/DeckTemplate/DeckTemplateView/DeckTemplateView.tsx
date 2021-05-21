import React from 'react'
import styled from 'styled-components'
import {
    Container,
    Header,
    Button,
    Icon,
} from 'semantic-ui-react'

import type { ViewProps as DeckTemplateViewProps } from '../DeckTemplateLogic/DeckTemplateLogic'

import type CardType from '../../../../types/Card'
import { Cards } from '../../../ui/Cards/Cards';

export type { DeckTemplateViewProps }

export function DeckTemplateView({
    deck,
    hand,
    revealedDeck,
    onToggleReveal,
    onShuffle,
    onDraw,
    onReset,
}: DeckTemplateViewProps) {
    const canReset = Boolean(hand.length)
    const canDraw = Boolean(deck.length)
    const canShuffle = deck.length === 52

    return (
        <Container>
            <Button.Group>
                <Button onClick={ onToggleReveal }>
                    <Icon name={ revealedDeck ? 'hide' : 'unhide' } />
                    { revealedDeck ? 'Hide' : 'Reveal' } Deck
                </Button>

                <Button
                    disabled={ !canShuffle }
                    onClick={ onShuffle }
                >
                    <Icon name="shuffle" />
                    Shuffle
                </Button>

                <Button
                    disabled={ !canDraw }
                    onClick={ onDraw }
                >
                    <Icon name="grab" />
                    Draw
                </Button>

                <Button
                    disabled={ !canReset }
                    onClick={ onReset }
                >
                    <Icon name="repeat" />
                    Reset
                </Button>
            </Button.Group>

            <Header as="h2">Your Deck</Header>

            <Cards
                cards={ deck }
                revealed={ revealedDeck }
                overlap="1.5%"
            />

            <Header as="h2">Your Hand</Header>

            <Cards
                cards={ hand }
                revealed={ true }
                overlap="1.5%"
            />
        </Container>
    )
}
