// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fs } from 'fs'
import path from 'path'

const requireImages = require.context('svg-cards/png/2x', true, /\.png$/);
const images = requireImages.keys().map(key => ({
    name: path.basename(key),
    source: requireImages(key).default,
}))

const IMAGES_PATH = 'node_modules/svg-cards/png/2x'

export default async function (req: NextApiRequest, res: NextApiResponse<string>) {
    const requestedImage = req.query.image.toString()
    const image = images.find(({ name }) => name === requestedImage)

    if (!image) {
        res.status(404).send('Not found')

        return
    }

    const buffer: Buffer = new Buffer(image.source.split(',')[1], 'base64')

    res.setHeader('Content-type', 'image/png')
    res.status(200).send(buffer)
}
