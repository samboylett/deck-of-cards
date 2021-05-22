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

    onToggleReveal: () => void
    onShuffle: () => void
    onDraw: () => void
    onReset: () => void
}

export default function useDeck({ initialDeck }: UseDeckArgs): UseDeckProps {
    const [deck, setDeck] = useState<Cards>(initialDeck);
    const [hand, setHand] = useState<Cards>([]);
    const [revealedDeck, setRevealedDeck] = useState<boolean>(false);

    const toggleReveal = () => setRevealedDeck(!revealedDeck);
    const shuffle = () => setDeck(lodashShuffle(deck));

    const draw = () => {
        setHand([
            ...hand,
            deck.slice(-1)[0],
        ])

        setDeck(deck.slice(0, -1));
    };

    const reset = () => {
        setDeck(initialDeck);
        setHand([]);
    };

    const canReset = Boolean(hand.length)
    const canDraw = Boolean(deck.length)
    const canShuffle = deck.length === 52

    return {
        deck,
        hand,
        revealedDeck,
        canReset,
        canDraw,
        canShuffle,
        toggleReveal,
        shuffle,
        draw,
        reset,
    }
}
