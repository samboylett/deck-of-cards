// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import type Card from '../../types/Card'
import CardSuit from '../../types/CardSuit'
import CardValue from '../../types/CardValue'

type Data = {
    cards: Array<Card>
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({
        cards: Object.keys(CardValue)
            .filter(e => isNaN(parseInt(e)))
            .flatMap(value => {
                return Object.keys(CardSuit)
                    .filter(e => isNaN(parseInt(e)))
                    .map(suit => ({
                        value,
                        suit,
                    }))
            }),
    })
}
