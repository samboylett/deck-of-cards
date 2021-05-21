// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'
import path from 'path'

import type Card from '../../types/Card'
import CardSuit from '../../types/CardSuit'
import CardValue from '../../types/CardValue'

type Data = {
    cards: Array<Card>
}

const IMAGES_PATH = 'node_modules/svg-cards/png/2x'

export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {
    const files = await fs.readdir(IMAGES_PATH)
    const { image } = req.query

    if (!files.includes(image)) {
        res.status(404).send()

        return
    }

    const file = await fs.readFile(path.join(IMAGES_PATH, image))

    res.status(200).send(file)
}
