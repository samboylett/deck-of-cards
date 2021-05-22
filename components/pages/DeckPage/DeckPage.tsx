import React from 'react'
import { DeckTemplate } from '../../templates/DeckTemplate/DeckTemplate'
import useDeck from '../../../hooks/useDeck/useDeck'
import { getDeck } from '../../../helpers/cards/cards'

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
