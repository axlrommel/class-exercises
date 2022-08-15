const { Schema, model } = require("mongoose");

const MusicSchema = new Schema({
  song: {
    type: String,
    trim: true,
  },
  artist: {
    type: String,
    trim: true,
  },
  album: {
    type: String,
    trim: true,
  },
  genre: {
    type: String,
    trim: true,
  },
  type: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  url: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  tags: [String],
});

const Music = model("Music", MusicSchema);

module.exports = Music;
