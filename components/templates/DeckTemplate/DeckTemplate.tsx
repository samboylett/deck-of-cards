import React from 'react'
import { DeckTemplateView } from './DeckTemplateView/DeckTemplateView'
import useDeck, { UseDeckArgs } from '../../../hooks/useDeck/useDeck'

export interface DeckTemplateProps extends UseDeckArgs {}

export function DeckTemplate({ initialDeck }: DeckTemplateProps) {
    const {
        deck,
        hand,
        revealedDeck,
        toggleReveal,
        shuffle,
        draw,
        reset,
    } = useDeck({ initialDeck })

    return (
        <DeckTemplateView
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
