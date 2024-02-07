import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LinkSchema = new Schema ({
    shortUrl: {
        type: String
    },
    originalUrl: {
        type: String
    }
});

const LinkModel = mongoose.model("link", LinkSchema);
export default LinkModel;