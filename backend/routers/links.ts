import {Router} from "express";
import {ShorURL} from "../types";
import LinkModel from "../models/Links";

export const linksRouter = Router();

linksRouter.post('/', async (req, res, next) => {

    try {
        let shorUrlGen = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < 6; i++) {
            shorUrlGen += characters.charAt(Math.random() * characters.length);
        }

        if (!shorUrlGen) {
            res.status(404).send({error: `Can't generated shorted URL`});
        }

        const postURL: ShorURL = {
            shortUrl: shorUrlGen,
            originalUrl: req.body.originalUrl
        }

        const newUrlLink = new LinkModel(postURL);
        await newUrlLink.save();

        res.json(newUrlLink);
    } catch (e) {
        next(e);
    }
});

linksRouter.get('/:shortUrl', async (req, res, next) => {
    try {
        const resultShort =
            await LinkModel.findOne({ shortUrl: req.params.shortUrl });

        if (!resultShort) {
            res.status(404).send({ error: 'Value is not found!' });
            return;
        }

        const originalUrl = resultShort.originalUrl;

        if (!originalUrl) {
            res.status(400).send({ error: 'Original URL is not provided or invalid!' });
            return;
        }

        res.status(301).redirect(originalUrl);
    } catch (e) {
        next(e);
    }
});