import { Router } from "express";
import * as controllers from "../controllers/animeQuotes.js";

Router.get("/", (req, res) => {});

//get one
Router.get("/animeQuotes", controllers.getAnimeQuotes);

//update one
Router.patch("/animeQuotes/:id", controllers.updateQuote);

//create one
Router.post("/animeQuotes", controllers.createQuote);

//delete one
Router.delete("/animeQuotes/:id", controllers.deleteQuote);

export default Router;
