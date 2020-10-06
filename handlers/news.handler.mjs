import axios from "axios";
import config from "config";

const NewsAPI = config.get("NewsAPI");

const newsHandler = (req, res) => {
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
    })
    .catch((error) => {
      res.send(error);
    });
};

const searchHandler = (req, res) => {
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
};

export { newsHandler, searchHandler };
