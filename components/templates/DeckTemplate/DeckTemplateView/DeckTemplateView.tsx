import React from 'react'
import styled from 'styled-components'
import {
    Container,
    Header,
    Button,
    Icon,
} from 'semantic-ui-react'
import MediaQuery from 'react-responsive'

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
    const buttonTextDeviceWidth = 800

    return (
        <Container>
            <Button.Group>
                <Button onClick={ onToggleReveal }>
                    <Icon name={ revealedDeck ? 'hide' : 'unhide' } />
                    <MediaQuery minDeviceWidth={buttonTextDeviceWidth}>
                        { revealedDeck ? 'Hide' : 'Reveal' } Deck
                    </MediaQuery>
                </Button>

                <Button
                    disabled={ !canShuffle }
                    onClick={ onShuffle }
                >
                    <Icon name="shuffle" />
                    <MediaQuery minDeviceWidth={buttonTextDeviceWidth}>
                        Shuffle
                    </MediaQuery>
                </Button>

                <Button
                    disabled={ !canDraw }
                    onClick={ onDraw }
                >
                    <Icon name="grab" />
                    <MediaQuery minDeviceWidth={buttonTextDeviceWidth}>
                        Draw
                    </MediaQuery>
                </Button>

                <Button
                    disabled={ !canReset }
                    onClick={ onReset }
                >
                    <Icon name="repeat" />
                    <MediaQuery minDeviceWidth={buttonTextDeviceWidth}>
                        Reset
                    </MediaQuery>
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
