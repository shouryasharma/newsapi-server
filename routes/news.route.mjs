import express from "express";
import axios from "axios";
import config from "config";

const router = express.Router();
const NewsAPI = config.get("NewsAPI");

router.get("/", (req, res) => {
  axios({
    url: `https://newsapi.org/v2/top-headlines?country=gb`,
    method: "get",
    responseType: "json",
    headers: {
      "X-Api-Key": NewsAPI.key,
    },
  })
    .then((response) => {
      res.send(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/everything/q/:q", (req, res) => {
  axios({
    url: `https://newsapi.org/v2/everything?q=${req.params.q}`,
    method: "get",
    responseType: "json",
    headers: {
      "X-Api-Key": NewsAPI.key,
    },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

export default router;
