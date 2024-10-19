const express = require('express');
const {
  getAllVideos,
  addVideos,
  updateVideo,
  deleteVideo,
} = require('../controllers/crudController');

const router = express.Router();

router.get('/liveItems', getAllVideos);
router.post('/addLive', addVideos);

// router.put('/LiveVideo/:id', updateVideo);
// router.delete('/LiveVideo/:id', deleteVideo);

router.route('/LiveVideo/:id').put(updateVideo).delete(deleteVideo);

module.exports = router;
