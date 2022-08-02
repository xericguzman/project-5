import { Router } from "express";
import anime from "../models/anime";
import animeRoutes from "./anime.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Good to go");
});

router.use("/", animeRoutes);

export default router;
