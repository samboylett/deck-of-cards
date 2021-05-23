import React from 'react'
import {
    Container,
    Header,
    Button,
    Icon,
    Dimmer,
    Loader,
    Message,
} from 'semantic-ui-react'

import type CardsType from '../../../types/Cards'
import { Cards } from '../../ui/Cards/Cards'
import { MediaQuery } from '../../ui/MediaQuery/MediaQuery'

export interface DeckTemplateProps {
    deck: CardsType
    hand: CardsType
    revealedDeck: boolean
    loading: boolean
    errored: boolean

    onToggleReveal: () => void
    onShuffle: () => void
    onDraw: () => void
    onReset: () => void
}

export function DeckTemplate({
    deck,
    hand,
    revealedDeck,
    loading,
    errored,

    onToggleReveal,
    onShuffle,
    onDraw,
    onReset,
}: DeckTemplateProps): JSX.Element {
    if (loading) {
        return (
            <Dimmer active inverted>
                <Loader inverted content="Loading Deck" />
            </Dimmer>
        )
    }

    if (errored) {
        return (
            <Container>
                <Message negative>
                    <Message.Header>Something went wrong!</Message.Header>
                    <p>The deck of cards could not be loaded, sorry.</p>
                </Message>
            </Container>
        )
    }

    const canReset = Boolean(hand.length)
    const canDraw = Boolean(deck.length)
    const canShuffle = deck.length === 52

    return (
        <Container>
            <MediaQuery minWidth={ 800 }>
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
            </MediaQuery>

            <MediaQuery maxWidth={ 799 }>
                <Button.Group>
                    <Button onClick={ onToggleReveal } icon>
                        <Icon name={ revealedDeck ? 'hide' : 'unhide' } />
                    </Button>

                    <Button
                        disabled={ !canShuffle }
                        onClick={ onShuffle }
                        icon
                    >
                        <Icon name="shuffle" />
                    </Button>

                    <Button
                        disabled={ !canDraw }
                        onClick={ onDraw }
                        icon
                    >
                        <Icon name="grab" />
                    </Button>

                    <Button
                        disabled={ !canReset }
                        onClick={ onReset }
                        icon
                    >
                        <Icon name="repeat" />
                    </Button>
                </Button.Group>
            </MediaQuery>

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
