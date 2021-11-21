const exp = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
let Parser = require("rss-parser");
let parser = new Parser();

const app = exp();

app.use(cors());
app.use(exp.urlencoded({ extended: true }));
app.use(exp.json());

app.set("view engine", "ejs");

app.use("/", exp.static(__dirname + "/public"));

app.listen(3000, () => console.log("I am listening on port 3000"));

// app.get;

app.get("/", async (req, res) => {
  let feed = await parser.parseURL("https://www.thefactsite.com/feed/");
  // console.log(feed);

  res.render("pages/index", {
    data: JSON.stringify(feed),
  });
});

app.get("/search", async (req, res) => {
  let feed = await parser.parseURL("https://www.thefactsite.com/feed/");
  // console.log(feed);

  res.render("pages/search");
});

app.post("/search/title", async (req, res) => {
  let feed = await parser.parseURL("https://www.thefactsite.com/feed/");
  let releventFeed = feed.items.filter((v) => v.title.includes(req.body.sT));
  console.log(releventFeed);
  res.json(releventFeed);
});
