const express = require("express");
const OnlineTracker = require("./onlineTracker");
const PORT = 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const onlineTracker = new OnlineTracker();

app.get("/users", (req, res) => {
  res.json(onlineTracker.getUsers());
});

app.post("/users", (req, res) => {
  onlineTracker.addUser(req.body.user);
  res.json(onlineTracker.getUsers());
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
