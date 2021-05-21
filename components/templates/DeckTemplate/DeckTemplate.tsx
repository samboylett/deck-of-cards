import React from 'react'
import { DeckTemplateLogic } from './DeckTemplateLogic/DeckTemplateLogic'
import { DeckTemplateView } from './DeckTemplateView/DeckTemplateView'
import type CardType from '../../../types/Card'

export interface DeckTemplateProps {
    initialDeck: Array<CardType>
}

export function DeckTemplate({ initialDeck }: DeckTemplateProps) {
    return (
        <DeckTemplateLogic
            initialDeck={ initialDeck }
            View={ DeckTemplateView }
        />
    )
}
