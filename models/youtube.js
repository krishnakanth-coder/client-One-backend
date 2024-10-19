const mongoose = require('mongoose');

const YoutubeSchema = new mongoose.Schema({
  youTubeUrl: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('videoUrl', YoutubeSchema);
