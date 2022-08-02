import AnimeQuote from "../models/anime.js";

//all quotes R
export const getAnimeQuotes = async (req, res) => {
  try {
    const quote = await AnimeQuote.find();
    res.json(quote);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

//one quote R
export const getAnimeQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const quote = await AnimeQuote.findByID(id);
    if (quote) {
      return res.json(quote);
    }
    res.status(404).json({ message: "No quote" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

//new quote C
export const createQuote = async (req, res) => {
  try {
    const quote = new AnimeQuote(req.body);
    await quote.save();
    res.status(201).json(quote);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

//find, update U
export const updateQuote = async (req, res) => {
  const { id } = req.params;
  const character = await AnimeQuote.findByIdAndUpdate(id, req.body);
  res.status(200).json(character);
};

//find, delete D
export const deleteQuote = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await AnimeQuote.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Quote deleted");
    }
    throw new Error("No quote found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
