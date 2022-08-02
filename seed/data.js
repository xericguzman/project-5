import db from "../db/connection.js";
import { AnimeQuote } from "../models/anime";
import axios from "axios";

const insertData = async () => {
  try {
    await db.dropDatabase();
    const response = await axios.get("https://animechan.vercel.app/api/quotes");
    let animeInfo = response.data.results.map((element) => {
      return {
        anime: element.anime,
        character: element.character,
        quote: element.quote,
      };
    });

    await AnimeQuote.insertMany(animeInfo);

    db.close();
  } catch (error) {
    console.log(error);
  }
};
insertData();
