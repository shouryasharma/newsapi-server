// NPM
import express from "express";
import morgan from "morgan";
import cors from "cors";

// Custom
import news from "./routes/news.route.mjs";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("combined"));
app.use("/news", news);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
