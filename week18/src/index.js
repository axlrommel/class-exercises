const express = require("express");
const mongoose = require("mongoose");
const Music = require("./models/Music");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/example", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("useCreateIndex", true);

mongoose.set("debug", false);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/music", (req, resp) => {
  Music.create(req.body)
    .then((musicEntry) => resp.status(201).json(musicEntry))
    .catch((err) => {
      console.error(err);
      resp.status(400).json(err);
    });
});

app.get("/music", async (req, resp) => {
  try {
    let songs;
    if (req.query && req.query.tag) {
      const tag = [req.query.tag];
      songs = await Music.find({ tags: { $in: tag } });
    } else {
      songs = await Music.find({});
    }
    resp.status(200).json(songs);
  } catch (err) {
    console.error(err);
    resp.status(400).json(err);
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
