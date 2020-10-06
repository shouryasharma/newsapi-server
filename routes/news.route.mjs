// NPM
import express from "express";
import axios from "axios";
import config from "config";

// Custom
import { newsHandler, searchHandler } from "../handlers/news.handler.mjs";

const router = express.Router();
const NewsAPI = config.get("NewsAPI");

// Route: /news/
router.get("/", newsHandler);

// Route: /news/everything/q/:q
router.get("/everything/q/:q", searchHandler);

export default router;
