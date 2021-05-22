import { useState } from 'react'
import lodashShuffle from 'lodash.shuffle'

import type Cards from '../../types/Cards'

export interface UseDeckArgs {
    initialDeck: Cards
}

export interface UseDeckReturn {
    deck: Cards
    hand: Cards
    revealedDeck: boolean

    toggleReveal: () => void
    shuffle: () => void
    draw: () => void
    reset: () => void
}

export default function useDeck({ initialDeck }: UseDeckArgs): UseDeckReturn {
    const [deck, setDeck] = useState<Cards>(initialDeck)
    const [hand, setHand] = useState<Cards>([])
    const [revealedDeck, setRevealedDeck] = useState<boolean>(false)

    const toggleReveal = (): void => setRevealedDeck(!revealedDeck)
    const shuffle = (): void => setDeck(lodashShuffle(deck))

    const draw = (): void => {
        setHand([
            ...hand,
            deck.slice(-1)[0],
        ])

        setDeck(deck.slice(0, -1))
    }

    const reset = (): void => {
        setDeck(initialDeck)
        setHand([])
    }

    return {
        deck,
        hand,
        revealedDeck,
        toggleReveal,
        shuffle,
        draw,
        reset,
    }
}
