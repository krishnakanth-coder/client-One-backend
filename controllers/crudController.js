const videoUrl = require('../models/youtube');
let UpdateVideoId = process.env.videoId;

// Get all videos

const getAllVideos = async (req, res) => {
  try {
    const videos = await videoUrl.find();
    let id = videos[0]._id.toString();
    console.log(id, videos);
    res.json({ videos, id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// add live videos
const addVideos = async (req, res) => {
  // try {
  //   const { youTubeUrl } = req.body;
  //   console.log(youTubeUrl);
  //   const addVdo = new videoUrl({ youTubeUrl });
  //   await addVdo.save();
  //   res.status(201).json(addVdo);
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }
};

// updata live videos
const updateVideo = async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  try {
    const { id } = req.params;
    const updataVideoUrl = await videoUrl.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updataVideoUrl);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete live videos
const deleteVideo = async (req, res) => {
  // try {
  //   const { id } = req.params;
  //   await videoUrl.findOneAndDelete(id);
  //   res.json({ message: 'Item deleted' });
  // } catch (err) {
  //   res.status(500).json({ error: err.message });
  // }
};

module.exports = { getAllVideos, addVideos, updateVideo, deleteVideo };
