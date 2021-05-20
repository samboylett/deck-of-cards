import type CardSuit from '../../types/CardSuit';
import type Card from '../../types/Card';
import CardValue from '../../types/CardValue';

interface SuitOption {
    name: CardSuit
    symbol: Number
    color: String
    cardSymbolsStart: Number
}

export function getSuits(): Array<SuitOption> {
    return [
        {
            name: 'Hearts',
            symbol: 2665,
            color: '#ff0000',
            cardSymbolsStart: 0x1F0B1,
        },

        {
            name: 'Clubs',
            symbol: 2663,
            color: '#000000',
            cardSymbolsStart: 0x1F0D1,
        },

        {
            name: 'Diamonds',
            symbol: 2666,
            color: '#ff0000',
            cardSymbolsStart: 0x1F0C1,
        },

        {
            name: 'Spades',
            symbol: 2660,
            color: '#000000',
            cardSymbolsStart: 0x1F0A1,
        },
    ];
}

export function getSuitOptions(suit: CardSuit): SuitOption {
    return getSuits().find(({ name }) => name === suit);
}

export function getCardSymbol(card: Card): Number {
    let valueIndex = isNaN(parseInt(card.value))
        ? CardValue[card.value]
        : card.value;

    if (valueIndex > 10) {
        valueIndex++;
    }

    return (getSuitOptions(card.suit).cardSymbolsStart + valueIndex).toString(16)
}
