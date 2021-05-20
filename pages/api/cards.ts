// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

enum Suit {
    Hearts,
    Clubs,
    Diamonds,
    Spades,
}

enum Value {
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace,
}

type Card = {
    suit: Suit
    value: Value
}

type Data = {
    cards: Array<Card>
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({
        cards: Object.keys(Value)
            .filter(e => isNaN(parseInt(e)))
            .flatMap(value => {
                return Object.keys(Suit)
                    .filter(e => isNaN(parseInt(e)))
                    .map(suit => ({
                        value,
                        suit,
                    }))
            }),
    })
}
