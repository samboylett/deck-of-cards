import React from 'react'
import { useAsync } from 'react-async'

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

    return (
        <DeckTemplate
            deck={ deck }
            hand={ hand }
            revealedDeck={ revealedDeck }
            loading={ isPending }
            errored={ Boolean(error) }

            onToggleReveal={ toggleReveal }
            onShuffle={ shuffle }
            onDraw={ draw }
            onReset={ reset }
        />
    )
}
