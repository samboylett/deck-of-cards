export const cardSuits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'] as const

type CardSuit = typeof cardSuits[number]

export default CardSuit
