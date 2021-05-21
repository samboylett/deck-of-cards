// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'
import path from 'path'

const IMAGES_PATH = 'node_modules/svg-cards/png/2x'

export default async function (req: NextApiRequest, res: NextApiResponse<string>) {
    const files = await fs.readdir(IMAGES_PATH)
    const image = req.query.image.toString()

    if (!files.includes(image)) {
        res.status(404).send('Not found')

        return
    }

    const file = await fs.readFile(path.join(IMAGES_PATH, image))

    res.status(200).send(file.toString())
}
