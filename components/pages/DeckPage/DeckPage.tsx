import React from 'react'
import { DeckTemplate } from '../../templates/DeckTemplate/DeckTemplate'
import useDeck, { UseDeckArgs } from '../../../hooks/useDeck/useDeck'
import { getDeck } from '../../../helpers/cards/cards'

export function DeckPage() {
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
