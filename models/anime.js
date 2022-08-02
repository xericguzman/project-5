import mongoose from "mongoose";

const Schema = mongoose.Schema;

let AnimeQuote = newSchema({
  anime: String,
  character: String,
  quote: String,
});

export default mongoose.model("quote", AnimeQuote);
