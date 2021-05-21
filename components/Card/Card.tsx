import styled from 'styled-components'
import { Suit } from '../Suit/Suit'
import svgCards from 'svg-cards/svg-cards.svg'
import type CardType from '../../types/Card'
import CardValue from '../../types/CardValue'

export interface CardProps {
    card: CardType|null
}

function getSvgImage(card: CardType|null) {
    if (!card) {
        return 'back';
    }

    const suit = card.suit.toLowerCase().slice(0, -1);
    const value: Number = isNaN(parseInt(card.value))
        ? CardValue[card.value]
        : card.value

    const svgValue = value < 10
        ? (value + 1)
        : CardValue[value].toLowerCase()

    return `${ suit }_${ svgValue }`
}

export function Card({ card }: CardProps) {
    const href = `${ svgCards }#${ getSvgImage(card) }`

    return (
        <svg width="169" height="244">
            <use
                href={ href }
                x="0"
                y="0"
                width="100%"
                height="100%"
            />
        </svg>
    );
}
