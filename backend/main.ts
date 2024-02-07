import express from 'express';
import {linksRouter} from "./routers/links";
import mongoose from "mongoose";
import config from "./configConnect";

const app = express();
const port = 8000;

app.use(express.json());

app.use('/links', linksRouter);

const run = async () => {
    await mongoose.connect(config.db);

    app.listen(port, () => {
        console.log(`Server running on port ${port}!`);
    });

    process.on('exit', () => {
        mongoose.disconnect();
    });
};

void run();

