// NPM
import axios from "axios";
import config from "config";
import Joi from "joi";

const NewsAPI = config.get("NewsAPI");

const schema = Joi.object({
  q: Joi.string().alphanum().required(),
});

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
  console.log(req.params);
  const { error, value } = schema.validate(req.params);
  if (error === undefined) {
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
  } else {
    res.status(400).send("Bad Request");
  }
};

export { newsHandler, searchHandler };
