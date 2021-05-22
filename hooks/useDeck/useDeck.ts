import { useState } from 'react'
import lodashShuffle from 'lodash.shuffle'

import type CardType from '../../types/Card'

export interface UseDeckArgs {
    initialDeck: Array<CardType>
}

export interface UseDeckReturn {
    deck: Array<CardType>
    hand: Array<CardType>
    revealedDeck: boolean
    onToggleReveal: () => void
    onShuffle: () => void
    onDraw: () => void
    onReset: () => void
}

export default function useDeck({ initialDeck }: UseDeckArgs): UseDeckProps {
    const [deck, setDeck] = useState<Array<CardType>>(initialDeck);
    const [hand, setHand] = useState<Array<CardType>>([]);
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
