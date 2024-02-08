import express from 'express';
import cors from 'cors';
import {linksRouter} from "./routers/links";
import mongoose from "mongoose";
import configConnect from "./configConnect";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/links', linksRouter);

const run = async () => {
    await mongoose.connect(configConnect.db);

    app.listen(port, () => {
        console.log(`Server running on port ${port}!`);
    });

    process.on('exit', () => {
        mongoose.disconnect();
    });
};

void run();