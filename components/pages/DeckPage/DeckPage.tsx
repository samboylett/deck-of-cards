import React from 'react'
import { useAsync } from 'react-async'
import { Dimmer, Loader, Message } from 'semantic-ui-react'

import { DeckTemplate } from '../../templates/DeckTemplate/DeckTemplate'
import useDeck from '../../../hooks/useDeck/useDeck'
import { getDeck, loadDeck } from '../../../helpers/cards/cards'

export function DeckPage(): JSX.Element {
    const {
        deck,
        hand,
        revealedDeck,
        toggleReveal,
        shuffle,
        draw,
        reset,
    } = useDeck({ initialDeck: getDeck() })

    const { error, isPending } = useAsync({ promiseFn: loadDeck })

    if (isPending) {
        return (
            <Dimmer active inverted>
                <Loader inverted content="Loading Deck" />
            </Dimmer>
        )
    }

    if (error) {
        return (
            <Message negative>
                <Message.Header>Something went wrong!</Message.Header>
                <p>The deck of cards could not be loaded, sorry.</p>
            </Message>
        )
    }

    return (
        <DeckTemplate
            deck={ deck }
            hand={ hand }
            revealedDeck={ revealedDeck }
            onToggleReveal={ toggleReveal }
            onShuffle={ shuffle }
            onDraw={ draw }
            onReset={ reset }
        />
    )
}
